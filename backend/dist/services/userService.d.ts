import { Role, User } from "@prisma/client";
export declare class UserService {
    private prisma;
    constructor();
    getAllUsers(): Promise<Pick<User, "id" | "email" | "role" | "createdAt">[]>;
    getUserById(id: number): Promise<Pick<User, "id" | "email" | "role" | "createdAt"> | null>;
    createUser(data: {
        email: string;
        password: string;
        role: Role;
    }): Promise<User>;
    updateUserRole(id: number, role: Role): Promise<User>;
    changePassword(id: number, newPassword: string): Promise<void>;
    deleteUser(id: number): Promise<User>;
}
//# sourceMappingURL=userService.d.ts.map