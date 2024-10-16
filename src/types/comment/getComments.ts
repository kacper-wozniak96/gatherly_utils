import { CommentDTO } from "./comment";

export interface GetCommentsRequestDTO {
  postId: number;
  offset: number;
}

export interface GetCommentsResponseDTO {
  comments: CommentDTO[];
  commentsTotalCount: number;
}
