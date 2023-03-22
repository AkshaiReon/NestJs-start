
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";



/* To start npx ts-node-dev src/main.ts */
async function bootstrap() {
    const app=await NestFactory.create(AppModule)
    await app.listen(3000);
}

bootstrap();