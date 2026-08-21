import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Admin app', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/screening');
    localStorage.setItem('authToken', 'test-token');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('shows the private screening page for authenticated admins', () => {
    render(<App />);

    expect(screen.getByText(/Private Clinical Screening/i)).toBeInTheDocument();
  });
});
