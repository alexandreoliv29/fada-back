import { Model } from 'mongoose';
import { UserDocument } from '../database/schemas/user.schema';
import { UserDto } from '../dtos/user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(user: UserDto): Promise<UserDto>;
    findUserById(id: string): Promise<UserDto>;
    findUser(user: UserDto): Promise<UserDto>;
    getAll(): Promise<UserDto[]>;
    updateUser(id: string, user: UserDto): Promise<UserDto>;
    deleteUser(id: string): Promise<UserDto>;
}
