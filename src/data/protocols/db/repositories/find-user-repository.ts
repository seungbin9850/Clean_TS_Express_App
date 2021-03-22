import { User } from "@/infra/db";

export class FindUserRepository {
  findOne: (id: string) => Promise<User>;
}
