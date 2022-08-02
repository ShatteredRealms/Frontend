import { Role } from "./role.model";

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    roles: Role[];
    token: string;
    createdAt: Date;
}
