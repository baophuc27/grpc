import { APP_FILTER, NestFactory } from '@nestjs/core';
import {MicroserviceOptions,ClientOptions,Transport} from '@nestjs/microservices'
import { AppModule } from './app.module';
import {join} from 'path'
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import {grpcClientOptions} from  './grpc-client.options'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options = new DocumentBuilder()
  .setTitle('User API')
  .setDescription('User API')
  .setVersion('1.0')
  .addTag('user')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000,'0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}


bootstrap();
