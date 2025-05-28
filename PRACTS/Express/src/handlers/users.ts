import { Request, Response } from "express";
import { createUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  response.send({});
}

export function createUser(
  request: Request<{}, {}, createUserDto, CreateUserQueryParams>,
  response: Response
) {
  request.body.email;
  request.query.loginAfterCreate;
}
 