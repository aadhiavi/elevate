// Common types and interfaces

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt?: Date;
}

export interface IApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  status: number;
}

export interface IApiError {
  message: string;
  status: number;
  code: string;
}

export interface IMenuItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  children?: IMenuItem[];
}
