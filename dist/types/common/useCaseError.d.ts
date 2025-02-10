import { IFailedField } from "./failedField";
export interface IUseCaseError {
    message: string | IFailedField[];
    isFormInvalid?: boolean;
    isForSnackbar?: boolean;
}
