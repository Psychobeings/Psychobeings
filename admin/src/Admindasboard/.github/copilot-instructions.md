# Psychobeings project rules

- This is the existing website of Psychobeings (www.psychobeings.com),
  a mental wellness and psychology brand.
  Tagline: "Empowering Minds, Transforming Lives".
- NEVER delete, rewrite, or restyle my existing pages unless I ask.
  Only add new files, and make small edits to existing ones
  (such as adding header/footer links).
- Match the existing pages' look: reuse their CSS, fonts, header and footer.
  Brand colors: teal #007F80, navy #0F2D3A, mint #E6F4F3.
- Use the logo file in the project's images folder.
- Two separate logins: Client (role "customer") and Admin
  (role "admin"). Keep separate pages, tokens, and route guards.
  Admin 2FA is temporarily disabled; retain lockout and rate limiting.
  A client token must never work on admin routes.
- Security: hashed passwords, server-side role checks, rate limiting,
  httpOnly cookies, no secrets in code (use .env, never commit it).
- AI companion "Psycho Buddy" must never diagnose or prescribe, must run
  crisis detection on every message, and must show helplines
  (India: Tele-MANAS 14416).
- Work one step at a time. Explain what you changed and how to test it.