import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {v1 as uuid } from 'uuid'
import {S3} from 'aws-sdk'

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
            Key: filename
        }).promise()
        const newFile = uploadResult.Key;
        return newFile
    }
}
