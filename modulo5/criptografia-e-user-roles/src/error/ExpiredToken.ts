import { BaseError } from "./BaseError";

export class ExpiredToken extends BaseError {
  constructor() {
    super("Seu login está expirado!", 401);
  }
}