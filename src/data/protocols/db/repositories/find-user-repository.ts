import { User } from "@/domain/entities";

export class FindUserRepository {
  findOne: (id: string) => Promise<User>;
}
