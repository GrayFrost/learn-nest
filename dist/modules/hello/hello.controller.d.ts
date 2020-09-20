import { HelloService } from './hello.service';
import { GetHelloDto } from './dto/create-hello.dto';
export declare class HelloController {
    private readonly helloService;
    constructor(helloService: HelloService);
    fetch({ id }: GetHelloDto): string;
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
