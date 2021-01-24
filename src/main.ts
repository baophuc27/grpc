import { APP_FILTER, NestFactory } from '@nestjs/core';
import {MicroserviceOptions,ClientOptions,Transport} from '@nestjs/microservices'
import { AppModule } from './app.module';
import {join} from 'path'
import {grpcClientOptions} from './grpc-client.options'
import {ExceptionFilter} from './common/filters/rpc-exception.filter'
import { config } from 'dotenv';
config()

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:5000',
        package: 'user',
        protoPath: join(__dirname, './protos/user.proto'),
      }
     });
     await app.listenAsync();
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  // await app.startAllMicroservicesAsync();
  // await app.listen(3001);
  // console.log(`Application is running on: ${await app.getUrl()}`);
}


bootstrap();
