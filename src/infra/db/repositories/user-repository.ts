import { FindUserRepository } from "@/data/protocols/db/repositories/find-user-repository";
import { User } from "@/infra/db";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository implements FindUserRepository {
  public async findOne(id: string): Promise<User> {
    return await getRepository(User)
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .getOne();
  }
}
