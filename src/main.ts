import { APP_FILTER, NestFactory } from '@nestjs/core';
import {MicroserviceOptions,ClientOptions,Transport} from '@nestjs/microservices'
import { AppModule } from './app.module';
import {join} from 'path'
import {grpcClientOptions} from './grpc-client.options'
import {ExceptionFilter} from './common/filters/rpc-exception.filter'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.GRPC,
      options: {
        url: process.env.GRPC_CONNECTION_URI,
        package: 'user',
        protoPath: join(__dirname, './protos/user.proto'),
      }
     });
     await app.listenAsync();
     console.log(process.env.DATABASE_URI)
}


bootstrap();
