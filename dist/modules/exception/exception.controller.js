"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionController = void 0;
const common_1 = require("@nestjs/common");
const exception_service_1 = require("./exception.service");
const http_exception_filter_1 = require("../../common/filters/http-exception.filter");
const swagger_1 = require("@nestjs/swagger");
let ExceptionController = class ExceptionController {
    constructor(exceptionService) {
        this.exceptionService = exceptionService;
    }
    fetch({ id }) {
        if (!id) {
            throw new common_1.HttpException({
                message: "错误",
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.exceptionService.get(id);
    }
    path(id) {
        return this.exceptionService.patch(id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: "exception get" }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ExceptionController.prototype, "fetch", null);
__decorate([
    common_1.Patch(':id'),
    swagger_1.ApiOperation({
        summary: 'exception get from param'
    }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ExceptionController.prototype, "path", null);
ExceptionController = __decorate([
    swagger_1.ApiTags("excception"),
    common_1.Controller("exception"),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter()),
    __metadata("design:paramtypes", [exception_service_1.ExceptionService])
], ExceptionController);
exports.ExceptionController = ExceptionController;
//# sourceMappingURL=exception.controller.js.map