import emailjs from '@emailjs/browser';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_DESTINATION_EMAIL,
} from './emailjs';
import { IEmailService } from './IEmailService';

export class EmailJSService implements IEmailService {
  async sendEmail(params: {
    from_name: string;
    from_email: string;
    to_email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        ...params,
        to_email: EMAILJS_DESTINATION_EMAIL,
      },
      EMAILJS_PUBLIC_KEY
    );
  }
} 