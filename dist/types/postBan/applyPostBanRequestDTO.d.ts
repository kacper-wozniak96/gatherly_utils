import { EBanType } from "./banType";
export interface ApplyPostBanRequestDTO {
    bansChanges: Partial<Record<EBanType, boolean>>;
}
