import { Injectable } from '@nestjs/common';
import { EmailService } from '../email.service';
import * as SibApiV3Sdk from  'sib-api-v3-typescript';
import { JsonNullableFilter } from 'src/util/JsonNullableFilter';
import { Params } from '../interfaces/params';

@Injectable()
export class SendinblueService implements EmailService {
    private API_INSTANCE
    private KEY
    private API_KEY
    constructor(){
        this.API_INSTANCE = new SibApiV3Sdk.TransactionalEmailsApi()
        this.KEY = process.env.SENDINBLUE_KEY || ''
        this.API_KEY = this.API_INSTANCE.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,this.KEY);
        
    }
    getSendunblueConfiguration() {
        // get all the configuration related to service
    }

    async sendEmail(emailDirections: string[],templateId:number,params: Params): Promise<String> {
        const arrayParams = Object.keys(params)
        

        let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
        if(params.bcc){
            sendSmtpEmail.bcc = params.bcc
        }
        if(params.cc){
            sendSmtpEmail.cc = params.cc
        }
        if(params.headers){
            sendSmtpEmail.headers = params.headers
        }
        if (params.replyTo){
            sendSmtpEmail.replyTo = params.replyTo
        }
        if (params.sender){
            sendSmtpEmail.sender = params.sender
        }
        if(params.subject){
            sendSmtpEmail.subject = params.subject
        }
        if(params.to){
            sendSmtpEmail.to = params.to
        }
        try{
            const result = this.API_INSTANCE.sendTransacEmail(sendSmtpEmail)

        }catch(e){
            console.log(e)
        }
        
        
        return 'Email sended to: ' + params.to
    }
}