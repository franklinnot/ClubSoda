import type { IUser } from "./interfaces/isuer";

class User implements IUser {
  name: string;
  lastname: string;
  doctype: string;
  doc_num: string;
  phone: string;
  email: string;
  password: string;

  constructor({
    name,
    lastname,
    doctype,
    doc_num,
    phone,
    email,
    password,
  }: IUser) {
    this.name = name;
    this.lastname = lastname;
    this.doctype = doctype;
    this.doc_num = doc_num;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
}
