import { BaseError } from "./BaseError";

export class PermissionDenied extends BaseError {
  constructor() {
    super("Seu usuário não tem permissão para este acesso ou seu tempo de acesso expirou!", 401);
  }
}