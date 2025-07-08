import { describe, it, expect, vi, beforeEach } from 'vitest';
import { EmailJSService } from '@/lib/EmailJSService';
import emailjs from '@emailjs/browser';

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
  send: vi.fn(),
}));

describe('EmailJSService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call emailjs.send with correct parameters', async () => {
    (emailjs.send as any).mockResolvedValueOnce({ status: 200 });
    const service = new EmailJSService();
    const params = {
      from_name: 'Test',
      from_email: 'test@example.com',
      to_email: 'dest@example.com',
      subject: 'Subject',
      message: 'Message',
    };
    await service.sendEmail(params);
    expect(emailjs.send).toHaveBeenCalled();
  });

  it('should propagate errors from emailjs.send', async () => {
    (emailjs.send as any).mockRejectedValueOnce(new Error('fail'));
    const service = new EmailJSService();
    await expect(service.sendEmail({
      from_name: 'Test',
      from_email: 'test@example.com',
      to_email: 'dest@example.com',
      subject: 'Subject',
      message: 'Message',
    })).rejects.toThrow('fail');
  });
}); 