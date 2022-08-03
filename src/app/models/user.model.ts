import { Role } from "./role.model";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    roles: Role[];
    token: string;
    createdAt: Date;
}
