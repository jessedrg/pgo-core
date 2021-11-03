export interface Params  {
    subject?: string;
    sender:SendingTo;
    to:SendingTo[];
    cc?:SendingTo[];
    bcc?:SendingTo[];
    replyTo?:SendingTo;
    headers?:Object
    params?:Parameter

}

interface SendingTo {
    "email":string;
    "sender":string;

}
interface Parameter {
    "parameter":string;
    "subject":string;
}