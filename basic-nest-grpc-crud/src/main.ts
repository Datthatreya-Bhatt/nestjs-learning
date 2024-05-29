import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<any>(AppModule,{
    transport : Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '../proto/user.proto'),
      url: 'localhost:3000'
    }
  });
  app.useGlobalPipes(new ValidationPipe())
  await app.listen();

}
bootstrap();
