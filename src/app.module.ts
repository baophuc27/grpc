import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import {MongooseModule} from '@nestjs/mongoose'
import { UserService } from './user/user.service';
import { UserSchema } from './user/schemas/user.schema';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionFilter } from './common/filters/rpc-exception.filter';
import { AwsController } from './aws/aws.controller';
import { AwsModule } from './aws/aws.module';
import { ConfigModule } from '@nestjs/config';
import {Connection} from 'mongoose'
import { FilesService } from './files/files.service';
import { FilesController } from './files/files.controller';
import { FilesModule } from './files/files.module';


@Module({
  imports: [UserModule, MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URL),
            MongooseModule.forFeature([
              {
              name: "User",
              schema: UserSchema,
              collection: 'users'
             }
            ]),
            AwsModule,
            ConfigModule.forRoot({
              isGlobal: true,
            }),
            FilesModule],

  controllers: [ UserController, AwsController, FilesController],

  providers: [AppService,
              UserService,
              FilesService,
            ],
})

export class AppModule {}
