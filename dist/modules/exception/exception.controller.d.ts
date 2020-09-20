import { ExceptionService } from "./exception.service";
export declare class ExceptionController {
    private readonly exceptionService;
    constructor(exceptionService: ExceptionService);
    fetch({ id }: {
        id: any;
    }): string;
}
