import { User } from "@/domain/entities";

export interface CreateUser {
  create: (data: CreateUser.Params) => Promise<void>;
}

export namespace CreateUser {
  export type Params = User;
}
