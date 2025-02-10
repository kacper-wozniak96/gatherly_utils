export interface UpdateUserRequestDTO {
    username?: string;
    avatarFile?: File;
    password?: string;
    confirmPassword?: string;
}
export declare const avatarFileKeyOnUserUpdate: keyof UpdateUserRequestDTO;
export declare const usernameKeyOnUserUpdate: keyof UpdateUserRequestDTO;
