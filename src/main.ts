import { APP_FILTER, NestFactory } from '@nestjs/core';
import {MicroserviceOptions,ClientOptions,Transport} from '@nestjs/microservices'
import { AppModule } from './app.module';
import {join} from 'path'
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import {grpcClientOptions} from  './grpc-client.options'
import {ConfigService} from '@nestjs/config'
import {config} from 'aws-sdk'

async function bootstrap() {
  console.log("hello")
  console.log(process.env.MONGODB_CONNECTION_URL)
  const app = await NestFactory.create(AppModule);
  
  const options = new DocumentBuilder()
  .setTitle('User API')
  .setDescription('User API')
  .setVersion('1.0')
  .addTag('user')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);

  const configService = app.get(ConfigService);
  config.update({
    accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
    region: configService.get('AWS_REGION'),
  });
  await app.listen(3000,'0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}


bootstrap();
