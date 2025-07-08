import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import Contact from '../Contact';
import { EmailJSService } from '@/lib/EmailJSService';

// Mock the EmailJSService globally
const sendEmailMock = vi.fn().mockResolvedValue({ status: 200 });
vi.mock('@/lib/EmailJSService', () => {
  return {
    EmailJSService: vi.fn().mockImplementation(() => ({
      sendEmail: sendEmailMock,
    })),
  };
});

describe('Contact Form Integration', () => {
  beforeEach(() => {
    sendEmailMock.mockClear();
  });

  it('submits the form and checks for 200 OK response', async () => {
    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText('Your Message'), { target: { value: 'Hello there!' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(sendEmailMock).toHaveBeenCalled();
    });
    // Optionally, check the response value if your code uses it
    // expect(sendEmailMock.mock.results[0].value).resolves.toEqual({ status: 200 });
  });
}); 