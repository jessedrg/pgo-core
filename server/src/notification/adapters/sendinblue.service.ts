import { Injectable } from '@nestjs/common';
import { EmailService } from '../email.service';

@Injectable()
export class SendinblueService implements EmailService {

    getSendunblueConfiguration() {
        // get all the configuration related to service
    }

    sendEmail(emailId: string): string {
        return "email sent to " + emailId;
    }
}