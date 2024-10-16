import { EBanType } from "./banType";

export interface ApplyPostBanRequestDTO {
  bansChanges: Record<EBanType, boolean>;
}
