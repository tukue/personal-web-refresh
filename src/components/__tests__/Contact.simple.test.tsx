import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// Mock EmailJS before importing Contact
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn()
  },
  send: vi.fn()
}));

// Mock the toast hook
vi.mock('@/components/ui/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn()
  })
}));

// Import Contact after mocks are set up
import Contact from '../Contact';

describe('Contact Component', () => {
  it('renders the contact form', () => {
    render(<Contact />);
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('Send Me a Message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });
});