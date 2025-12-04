export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  message: string;
  userId: number;
  userType: string | undefined;
}
