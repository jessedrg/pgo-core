import { Injectable } from '@nestjs/common';
import { JsonNullableFilter } from 'src/util/JsonNullableFilter';
import { EmailService } from './email.service';
import { Params } from './interfaces/params';

@Injectable()
export class NotificationService {

    constructor(private emailService: EmailService) {

    }
    sendEmail(emailDirections: string[],templateId:number,params:Params): Promise<String> {
        return this.emailService.sendEmail(emailDirections,templateId,params);
    }
}