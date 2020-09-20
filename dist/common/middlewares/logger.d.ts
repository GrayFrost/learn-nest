import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class LoggerMiddle implements NestMiddleware {
    use(req: Request, res: Response, next: () => void): void;
}
