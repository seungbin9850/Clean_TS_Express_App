import { CreateUserRepository } from "@/data/protocols/db/repositories/create-user-repository";
import { FindUserRepository } from "@/data/protocols/db/repositories/find-user-repository";
import { User } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository
  implements FindUserRepository, CreateUserRepository {
  public async findOne(id: string): Promise<User> {
    return await getRepository(User)
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .getOne();
  }

  public async create(data: CreateUserRepository.Params): Promise<void> {
    await getRepository(User)
      .createQueryBuilder("user")
      .insert()
      .into(User)
      .values(data)
      .execute();
  }
}
