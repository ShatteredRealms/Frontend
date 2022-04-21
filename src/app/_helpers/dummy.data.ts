import {User} from "../models/user.model";
import {Role} from "../models/role.model";


export function NewUser(): User {
  return {
    email: "",
    first_name: "",
    id: 0,
    last_name: "",
    token: "",
    username: "",
    permissions: [],
    role: Role.USER,
    created_at: new Date(Date.now()),
  };
}
