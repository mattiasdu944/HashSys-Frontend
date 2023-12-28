import { User } from "./user";

export interface ValidateToken {
    message: string;
    user: User;
}