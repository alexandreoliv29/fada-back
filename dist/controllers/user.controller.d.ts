import { UserDto } from '../dtos/user.dto';
import { UserService } from '../services/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(params: any): Promise<UserDto>;
    authenticate(user: any): Promise<UserDto>;
    getAll(): Promise<UserDto[]>;
    createUser(user: any): Promise<UserDto>;
    updateUser(params: any, user: any): Promise<UserDto>;
    deleteUser(params: any): Promise<UserDto>;
}
