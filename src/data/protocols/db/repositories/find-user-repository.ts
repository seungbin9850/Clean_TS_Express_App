import { User } from "@/domain/entities";

export interface FindUserRepository {
  findOne: (id: string) => Promise<User>;
}
