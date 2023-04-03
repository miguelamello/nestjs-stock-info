import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.app_port, port, () => {
    console.log(`Application is running on: http://${host}:${port}`);
  });
}

bootstrap();
