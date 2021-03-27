import { HttpResponse } from "@/presentation/protocols";
import { ServerError, UnauthorizedError } from "@/presentation/errors";
import { AlreadyExistsError } from "../errors/already-exists";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const alreadyExistsData = (): HttpResponse => ({
  statusCode: 409,
  body: new AlreadyExistsError(),
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
