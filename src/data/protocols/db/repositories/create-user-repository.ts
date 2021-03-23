import { CreateUser } from "@/domain/usecase/create-user";

export interface CreateUserRepository {
  create: (data: CreateUserRepository.Params) => Promise<void>;
}

export namespace CreateUserRepository {
  export type Params = CreateUser.Params;
}
