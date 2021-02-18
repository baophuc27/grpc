import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {S3} from 'aws-sdk'
import {v4 as uuid} from 'uuid'
@Injectable()
export class FilesService {
    constructor(
        private readonly configService: ConfigService
    ){}

    async uploadFile(dataBuffer: Buffer, filename: string){
        const s3 = new S3()
        const uploadResult = await s3.upload({
            Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
            Body: dataBuffer,
            Key: `${uuid()}-${filename}`
        }).promise()
        const newFile = uploadResult.Key;
        return newFile
    }

    async generatePresignedUrl(key: string){
        const s3 = new S3()
        return s3.getSignedUrlPromise('getObject',{
            Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
            Key: key
        })
    }
}
