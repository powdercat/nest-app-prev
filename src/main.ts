import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // true: DTO에 없는 속성은 무시
      forbidNonWhitelisted: true, // 존재해서는 안되는 property가 있으면 에러를 발생시킴
      transform: true, // true: DTO에 있는 속성들의 타입을 자동으로 변환
    })
  );

  await app.listen(3000);
}
bootstrap();
