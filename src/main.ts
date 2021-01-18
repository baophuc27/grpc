import { NestFactory } from '@nestjs/core';
import {MicroserviceOptions,ClientOptions,Transport} from '@nestjs/microservices'
import { AppModule } from './app.module';
import {join} from 'path'
import {grpcClientOptions} from './grpc-client.options'


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.GRPC,
      options: {
        package: 'user',
        protoPath: join(__dirname, './protos/user.proto'),
      }
     });
     await app.listenAsync();
}


bootstrap();
