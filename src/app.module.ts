import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { RpcController } from './rpc/rpc.controller';
import { RpcService } from './rpc/rpc.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UserService } from './user/user.service';
import { UserSchema } from './user/schemas/user.schema';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionFilter } from './common/filters/rpc-exception.filter';
import { AwsController } from './aws/aws.controller';
import { AwsModule } from './aws/aws.module';



@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost:27017/finance-tracker'),
            MongooseModule.forFeature([{
              name: "User",
              schema: UserSchema,
              collection: 'users'
            }]),
            AwsModule],

  controllers: [ UserController, RpcController, AwsController],

  providers: [AppService,
              RpcService,
              UserService,
            ],
})

export class AppModule {}
