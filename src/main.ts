import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('main');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: Number(process.env.PORT),
      },
    },
  );
  await app.listen();
  logger.log(
    `Microservicio de academy-file corriendo en el puerto ${process.env.PORT}`,
  );
}
bootstrap();
