# Psychobeings backend

The backend is the existing Express/Mongoose service. Start it from this directory after copying `.env.example` to `.env` and filling in the required values:

```sh
npm start
```

`JWT_SECRET` and a MongoDB URI are required to start. Set `SOURCE_URL` and `ADMIN_URL` to the browser origins of the public website and admin app. Session credentials are held in separate `httpOnly`, `SameSite=Lax` cookies: `client_session` and `admin_session`. Authenticated requests from a browser must include credentials.

## Authentication and portal APIs

- `POST /auth/client/signup` — email, password (12+ characters), and `consent: true`; creates a customer account and client session.
- `POST /auth/client/invitation/accept` — invitation token, email, password, and `consent: true`; completes an admin-created client invitation.
- `POST /auth/client/signin`, `POST /auth/client/logout`, `GET /auth/client/session`
- `POST /auth/client/password/forgot` and `/auth/client/password/reset`
- `POST /admin/signup` — one-time/controlled provisioning protected by `x-admin-bootstrap-key`.
- `POST /admin/signin`, `POST /admin/logout`, `GET /admin/session` — administrator password sign-in and session management.
- `POST /admin/password/forgot` and `/admin/password/reset`
- `GET /auth/mood`, `POST /auth/mood` — client-owned mood entries.
- `POST /auth/chat` — client-only Psycho Buddy chat. Requires `consentToExternalProcessing: true` before any message is sent to Anthropic. Every message is checked for crisis signals first; detected messages create an admin alert and receive the crisis support response instead of being sent to Claude.
- Admin-only `GET /admin/overview`, `/admin/users`, `/admin/crisis-alerts`, `/admin/audit-log`, and `PATCH /admin/crisis-alerts/:id`.
- Admin-only `POST /admin/users/invitations` sends a single-use client invitation link; `DELETE /admin/users/:id` removes the client account while retaining associated mood and crisis records.

Admin accounts are locked for 15 minutes after five failed password attempts. Admin sessions have a 30-minute sliding inactivity timeout. Logout and password reset invalidate earlier sessions. Role guards use separate cookie names, JWT audiences, and MongoDB collections. Admin sign-in currently uses password-only authentication; re-enable multi-factor authentication before relying on the admin portal for sensitive production operations.

Public `POST /session-form/register` remains available for the existing booking form. Reading, booking, or deleting session records and reading/updating contact inbox messages now requires an admin session.

## Configuration and deployment notes

Password reset and client invitation delivery require `EMAILADD`, `EMAILPASS`, and `SENDERMAIL`. Client invitation links expire after 30 minutes and require the invitee to accept the terms and privacy policy while creating a password. Psycho Buddy additionally requires `ANTHROPIC_API_KEY` and `ANTHROPIC_MODEL`; neither value is stored in source code. Chat responses are supportive only and must not diagnose or prescribe. The crisis response provides India Tele-MANAS at **14416** and emergency services at **112**.

The HTTP request rate limiter is process-local; use a shared store such as Redis when deploying multiple backend instances. Authentication lockout counters are stored in MongoDB. Configure HTTPS in production so session cookies are marked `Secure`. If the public and backend apps are on different sites, configure `COOKIE_SAME_SITE=none` and HTTPS; requests still require an allowed `Origin`.
