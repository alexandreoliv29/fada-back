import { WineDto } from '../dtos/wine.dto';
import { WineService } from '../services/wine.service';
export declare class WineController {
    private readonly wineService;
    userService: any;
    constructor(wineService: WineService);
    getWine(params: any): Promise<WineDto>;
    getAll(): Promise<WineDto[]>;
    createWine(wine: any): Promise<WineDto>;
    updateWine(params: any, wine: any): Promise<WineDto>;
    deleteWine(params: any): Promise<WineDto>;
}
