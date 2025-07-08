export interface IEmailService {
  sendEmail(params: {
    from_name: string;
    from_email: string;
    to_email: string;
    subject: string;
    message: string;
  }): Promise<void>;
} 