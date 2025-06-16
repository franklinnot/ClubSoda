export interface IUser {
  name: string;
  lastname: string;
  doctype: string;
  doc_num: string;
  phone: string;
  email: string;
  password: string;
}

export interface IUserAuth {
  email: string;
  name: string;
}
