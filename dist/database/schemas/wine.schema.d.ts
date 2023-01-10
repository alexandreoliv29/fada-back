/// <reference types="mongoose/types/PipelineStage" />
/// <reference types="mongoose" />
export declare type WineDocument = Wine & Document;
export declare class Wine {
    name: string;
    price: string;
    sale: string;
    category: string;
    country: string;
    vol: string;
    alcohol: string;
    grapes: string;
    year: string;
    description: string;
    image: string;
}
export declare const WineSchema: import("mongoose").Schema<Wine, import("mongoose").Model<Wine, any, any, any>, any, any>;
