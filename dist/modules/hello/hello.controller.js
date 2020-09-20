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
exports.HelloController = void 0;
const common_1 = require("@nestjs/common");
const hello_service_1 = require("./hello.service");
const swagger_1 = require("@nestjs/swagger");
const create_hello_dto_1 = require("./dto/create-hello.dto");
let HelloController = class HelloController {
    constructor(helloService) {
        this.helloService = helloService;
    }
    fetch({ id }) {
        return this.helloService.fetch(id);
    }
    save({ message }) {
        return this.helloService.save(message);
    }
    update({ id }, { message }) {
        return this.helloService.update(id, message);
    }
    remove({ id }) {
        return this.helloService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'fetch hello' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hello_dto_1.GetHelloDto]),
    __metadata("design:returntype", String)
], HelloController.prototype, "fetch", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], HelloController.prototype, "save", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], HelloController.prototype, "update", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], HelloController.prototype, "remove", null);
HelloController = __decorate([
    swagger_1.ApiTags('hello'),
    common_1.Controller('hello'),
    __metadata("design:paramtypes", [hello_service_1.HelloService])
], HelloController);
exports.HelloController = HelloController;
//# sourceMappingURL=hello.controller.js.map