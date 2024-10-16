import { PostDTO } from "./post";

export interface GetPostsResponseDTO {
  posts: PostDTO[];
  postsTotalCount: number;
}
