import {
    Controller,
    Get,
    Patch,
    Query,
    UseFilters,
    HttpException,
    HttpStatus,
    ParseIntPipe, Param
} from "@nestjs/common";
import { ExceptionService } from "./exception.service";
import {HttpExceptionFilter} from '../../common/filters/http-exception.filter';
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("excception")
@Controller("exception")
@UseFilters(new HttpExceptionFilter())
export class ExceptionController {
    constructor(private readonly exceptionService: ExceptionService) {}

    // 查
    @Get()
    @ApiOperation({ summary: "exception get" })
    fetch(@Query() { id }): string {
        if (!id) {
            throw new HttpException(
                {
                    message: "错误",
                },
                HttpStatus.BAD_REQUEST
            );
        }
        return this.exceptionService.get(id);
    }

    // 查from param
    @Patch(':id')
    @ApiOperation({
      summary: 'exception get from param'
    })
    path(@Param('id', new ParseIntPipe()) id): string{
      return this.exceptionService.patch(id);
    }
}
