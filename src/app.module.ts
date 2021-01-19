import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { RpcController } from './rpc/rpc.controller';
import { RpcService } from './rpc/rpc.service';
import { RpcModule } from './rpc/rpc.module';
import { AuthModule } from './auth/auth.module';
import {MongooseModule} from '@nestjs/mongoose'
import { UserService } from './user/user.service';
import { UserSchema } from './user/schemas/user.schema';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionFilter } from './common/filters/rpc-exception.filter';



@Module({
  imports: [UserModule, AuthModule, MongooseModule.forRoot(process.env.DATABASE_URI),
            MongooseModule.forFeature([{
              name: "User",
              schema: UserSchema,
              collection: 'users'
            }])],

  controllers: [ UserController, RpcController],

  providers: [AppService,
              RpcService,
              UserService,
            ],
})

export class AppModule {}
