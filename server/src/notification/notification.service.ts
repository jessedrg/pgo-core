import { Injectable } from '@nestjs/common';
import { EmailService } from './email.service';

@Injectable()
export class NotificationService {

    constructor(private emailService: EmailService) {

    }
    send(emailID: string): string {
        return this.emailService.sendEmail(emailID);
    }
}