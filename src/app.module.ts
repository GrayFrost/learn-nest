import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HelloModule } from "./modules/hello/hello.module";
import {ExceptionModule} from './modules/exception/exception.module';
import { LoggerMiddleware } from "./common/middlewares/logger.middleware";
@Module({
    imports: [HelloModule, ExceptionModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes("hello");
    }
}
