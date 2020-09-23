import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HelloModule } from "./modules/hello/hello.module";
import {ExceptionModule} from './modules/exception/exception.module';
import { LoggerMiddleware } from "./common/middlewares/logger.middleware";
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './modules/hello/entity/user.entity';
@Module({
    imports: [HelloModule, ExceptionModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'abc123456789@',
        database: 'learn-nest',
        entities: [User],
        synchronize: true,
    })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes("hello");
    }
}
