import { JsonNullableFilter } from "src/util/JsonNullableFilter";
import { Params } from "./interfaces/params";

export abstract class EmailService {
    abstract sendEmail(emailDirections: string[],templateId:number,params: Params):Promise<String>;
}