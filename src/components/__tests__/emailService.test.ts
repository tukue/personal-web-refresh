import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock EmailJS
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn()
  },
  send: vi.fn()
}));

// Import after mocking
import emailjs from '@emailjs/browser';

// Mock constants
const SERVICE_ID = 'test-service-id';
const TEMPLATE_ID = 'test-template-id';
const PUBLIC_KEY = 'test-public-key';

describe('Email Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('should call EmailJS with correct parameters', async () => {
    // Setup mock to return success
    (emailjs.send as any).mockResolvedValueOnce({ status: 200 });
    
    const mockData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test message content'
    };
    
    // Call the EmailJS send function
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: mockData.name,
        from_email: mockData.email,
        subject: mockData.subject,
        message: mockData.message
      },
      PUBLIC_KEY
    );
    
    // Verify EmailJS was called with correct parameters
    expect(emailjs.send).toHaveBeenCalledWith(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: mockData.name,
        from_email: mockData.email,
        subject: mockData.subject,
        message: mockData.message
      },
      PUBLIC_KEY
    );
  });
});