import { UserDTO } from "./user";
export interface LoginUserRequestDTO {
    username: string;
    password: string;
}
export interface LoginUserResponseDTO {
    user: UserDTO;
}
