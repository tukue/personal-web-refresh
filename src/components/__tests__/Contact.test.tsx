import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// Mock modules before importing components
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn()
  },
  send: vi.fn()
}));

vi.mock('@/components/ui/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn()
  })
}));

// Mock environment variables
vi.mock('@/lib/emailjs', () => ({
  EMAILJS_SERVICE_ID: 'test-service-id',
  EMAILJS_TEMPLATE_ID: 'test-template-id',
  EMAILJS_PUBLIC_KEY: 'test-public-key'
}));

// Now import the component
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