import { EBanType } from "./banType";

export interface PostBanDTO {
  id: number;
  type: EBanType;
  userId: number;
  postId: number;
}
