import { UserDTO } from "types/user";
export interface CommentDTO {
    id: number;
    postId: number;
    text: string;
    user: UserDTO;
}
