import { Injectable } from '@nestjs/common';
import * as fileType from 'file-type'
import { MediaFileService } from 'src/mediaFile/mediaFile.service';
import {v4 as uuid} from 'uuid'
import {InjectS3,S3} from 'nestjs-s3'

interface FileType {
    ext: string;
    mime:string;
}
@Injectable()
export class FilesystemService {
    private bucketName = process.env.S3_BUCKET_NAME
    constructor(private readonly mediafileService: MediaFileService,@InjectS3() private s3:S3 ){}
    async uploadFile(data:Buffer){
       
        const fileTypeObj = await fileType.fromBuffer(data)
        const { ext, mime } = fileTypeObj || {};
        if(!ext || !mime){
            throw new Error('mime or ext not found')
            
        }
        
        const uploadkey = uuid.toString()+'.'+ext
        const params = {
            Key:uploadkey,
            Bucket: this.bucketName,
            Body:data,
            ContentType: fileTypeObj?.mime,
            ACL:'public-read'}
        try{
            const result = await this.s3.putObject(params)

        }catch(e){
            throw new Error('Invalid upload...')

        }
        await this.mediafileService.create({url: `https://pgo-staging.s3.eu-west-3.amazonaws.com/${uploadkey}`,type:mime})
        return uploadkey
    }
    async deleteFile(filename:string,id:string){
        if(filename){
            const deleteobject = await this.s3.deleteObject({Key:filename,Bucket:this.bucketName})
            await this.mediafileService.delete({url:`https://pgo-staging.s3.eu-west-3.amazonaws.com/${filename}`})
            return filename+ 'deleted'
        }
        const selectedMediafile =await  this.mediafileService.delete({id})
        if(!selectedMediafile){
            throw new Error('Not found')
        }
       
        const deleteObjectById = await this.s3.deleteObject({Key:filename,Bucket:this.bucketName})
        

    }
   
}
