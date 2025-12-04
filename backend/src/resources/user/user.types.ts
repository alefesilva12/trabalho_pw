export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserDTO {
  id: number;
  name: string;
  email: string;
  userTypeId: number | null;
}
