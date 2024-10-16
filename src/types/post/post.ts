import { CommentDTO } from "types/comment/comment";
import { UserDTO } from "types/user";

export interface PostDTO {
  id: number;
  title: string;
  text: string;
  user: UserDTO;
  upVotesTotalNumber: number;
  downVotesTotalNumber: number;
  isUpVotedByUser: boolean;
  isDownVotedByUser: boolean;
  createdAt: Date;
  postCommentsTotalNumber: number;
  comments: CommentDTO[];
}
