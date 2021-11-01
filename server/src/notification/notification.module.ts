import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendinblueService } from './adapters/sendinblue.service';
import { EmailService } from './email.service';

@Module({
    imports: [],
    controllers: [],
    providers: [NotificationService, {
        provide: EmailService,
        useClass: SendinblueService
    }],
    exports: [NotificationService] 

})
export class NotificationModule { }