import { Module } from '@nestjs/common';
import { MediaFileModule } from 'src/mediaFile/mediaFile.module';
import { FilesystemService } from './filesystem.service';
import {S3Module} from 'nestjs-s3'


@Module({
  providers: [FilesystemService],
  imports: [MediaFileModule,S3Module.forRoot({
    config: {
      accessKeyId:process.env.S3_ACCES_KEY,
      secretAccessKey:process.env.S3_SECRET_KEY,
      endpoint:process.env.REGION_S3_ENDPOINT,
      s3ForcePathStyle:true,
      signatureVersion: 'v4'
    }
  })]
})
export class FilesystemModule {}
