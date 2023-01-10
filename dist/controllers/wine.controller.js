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
exports.WineController = void 0;
const common_1 = require("@nestjs/common");
const wine_service_1 = require("../services/wine.service");
let WineController = class WineController {
    constructor(wineService) {
        this.wineService = wineService;
    }
    async getWine(params) {
        try {
            const response = await this.wineService.findWine(params.id);
            return response;
        }
        catch (error) {
            return error.message;
        }
    }
    async getAll() {
        try {
            const response = await this.wineService.getAll();
            return response;
        }
        catch (error) {
            return error.message;
        }
    }
    async createWine(wine) {
        try {
            const response = await this.wineService.create(wine);
            return response;
        }
        catch (error) {
            return error.message;
        }
    }
    async updateWine(params, wine) {
        try {
            const response = await this.wineService.updateWine(params.id, wine);
            return response;
        }
        catch (error) {
            return error.message;
        }
    }
    async deleteWine(params) {
        try {
            const response = await this.wineService.deleteWine(params.id);
            return response;
        }
        catch (error) {
            return error.message;
        }
    }
};
__decorate([
    (0, common_1.Get)('/find/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WineController.prototype, "getWine", null);
__decorate([
    (0, common_1.Get)('/listAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WineController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/createwine'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WineController.prototype, "createWine", null);
__decorate([
    (0, common_1.Put)("/update-wine/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WineController.prototype, "updateWine", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WineController.prototype, "deleteWine", null);
WineController = __decorate([
    (0, common_1.Controller)('wine'),
    __metadata("design:paramtypes", [wine_service_1.WineService])
], WineController);
exports.WineController = WineController;
//# sourceMappingURL=wine.controller.js.map