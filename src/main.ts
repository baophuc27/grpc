import { APP_FILTER, NestFactory } from '@nestjs/core';
import {MicroserviceOptions,ClientOptions,Transport} from '@nestjs/microservices'
import { AppModule } from './app.module';
import {join} from 'path'
import { config } from 'dotenv';
config()

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.GRPC,
      options: {
        url: process.env.GRPC_CONNECTION_URL,
        package: 'user',
        protoPath: join(__dirname, './protos/user.proto'),
      }
     });
     await app.listenAsync();
     
}


bootstrap();
