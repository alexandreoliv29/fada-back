/// <reference types="mongoose/types/PipelineStage" />
/// <reference types="mongoose" />
export declare type UserDocument = User & Document;
export declare class User {
    username: string;
    email: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any, any>;
