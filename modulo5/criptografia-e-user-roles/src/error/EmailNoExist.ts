import { BaseError } from "./BaseError";

export class EmailNoExist extends BaseError {
  constructor() {
    super("Email não localizado", 401);
  }
}
