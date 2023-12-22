import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose', 'log'],
  });

  // DTO body validation
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('Residuum challenge 01')
  .setDescription('API for the first residuum challenge.')
  .setVersion('1.0')
  .build();

const swaggerOptions = {defaultModelsExpandDepth: -1}
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document, {
  swaggerOptions: swaggerOptions
});


  await app.listen(3000);
}
bootstrap();
