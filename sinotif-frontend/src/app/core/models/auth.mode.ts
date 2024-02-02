export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface ILogin {
  email: string;
  password: string;
}

// export interface ILoginResponse {
//   message: string;
//   accessToken: string;
//   user: IUser;
// }

export interface ILoginResponse {
  data: any;
  response: any;
}
