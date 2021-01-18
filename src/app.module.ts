import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { RpcController } from './rpc/rpc.controller';
import { RpcService } from './rpc/rpc.service';
import { RpcModule } from './rpc/rpc.module';
import { AuthModule } from './auth/auth.module';
import {MongooseModule} from '@nestjs/mongoose'



@Module({
  imports: [UserModule, AuthModule, MongooseModule.forRoot('mongodb://localhost:27017/finance-tracker')],
  controllers: [ UserController, RpcController],
  providers: [AppService, RpcService],
})
export class AppModule {}
