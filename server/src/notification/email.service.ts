
export abstract class EmailService {
    abstract sendEmail(emailId: string): string;
}