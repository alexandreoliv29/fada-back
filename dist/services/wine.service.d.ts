import { Model } from 'mongoose';
import { WineDocument } from '../database/schemas/wine.schema';
import { WineDto } from '../dtos/wine.dto';
export declare class WineService {
    private wineModel;
    constructor(wineModel: Model<WineDocument>);
    create(wine: WineDto): Promise<WineDto>;
    findWine(id: string): Promise<WineDto>;
    getAll(): Promise<WineDto[]>;
    updateWine(id: string, wine: WineDto): Promise<WineDto>;
    deleteWine(id: string): Promise<WineDto>;
}
