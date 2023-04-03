import { Users } from "../../entities/user";

export interface iContactCreate {
  name: string;
  email: string;
  phone: string;
  user: Users;
}

export interface iToken {
  id: string;
}
