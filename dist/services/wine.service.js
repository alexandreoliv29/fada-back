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
exports.WineService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const wine_schema_1 = require("../database/schemas/wine.schema");
let WineService = class WineService {
    constructor(wineModel) {
        this.wineModel = wineModel;
    }
    async create(wine) {
        const newWine = new this.wineModel(wine);
        return newWine.save();
    }
    async findWine(id) {
        return await this.wineModel.findById(id);
    }
    async getAll() {
        return await this.wineModel.find();
    }
    async updateWine(id, wine) {
        const oldWine = await this.wineModel.findByIdAndUpdate(id, wine);
        return oldWine.save();
    }
    async deleteWine(id) {
        return await this.wineModel.findByIdAndDelete(id);
    }
};
WineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(wine_schema_1.Wine.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WineService);
exports.WineService = WineService;
//# sourceMappingURL=wine.service.js.map