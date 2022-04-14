import { Permission } from "./permission.model";
import { Role } from "./role.model";

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    role: Role;
    permissions: Array<Permission>;
}
