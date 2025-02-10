export interface UpdateUserRequestDTO {
  username?: string;
  avatarFile?: File;
  password?: string;
  confirmPassword?: string;
}

export const avatarFileKeyOnUserUpdate: keyof UpdateUserRequestDTO = 'avatarFile';
export const usernameKeyOnUserUpdate: keyof UpdateUserRequestDTO = 'username';