import { CreateUser } from "@/domain/usecases";
import { Controller, HttpResponse } from "@/presentation/protocols";
import { alreadyExistsData, ok } from "../helpers";

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser) {}

  async handle(request: CreateUser.Params): Promise<HttpResponse> {
    try {
      await this.createUser.create(request);
    } catch (e) {
      return alreadyExistsData();
    }
    return ok("success");
  }
}
