import {User} from "../models/user.model";


export function NewUser(): User {
  return {
    email: "",
    firstName: "",
    id: 0,
    lastName: "",
    token: "",
    username: "",
    roles: [],
    createdAt: new Date(Date.now()),
  };
}
