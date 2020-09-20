import { HelloService } from './hello.service';
export declare class HelloController {
    private readonly helloService;
    constructor(helloService: HelloService);
    fetch({ id }: {
        id: any;
    }): string;
    save({ message }: {
        message: any;
    }): string;
    update({ id }: {
        id: any;
    }, { message }: {
        message: any;
    }): string;
    remove({ id }: {
        id: any;
    }): string;
}
