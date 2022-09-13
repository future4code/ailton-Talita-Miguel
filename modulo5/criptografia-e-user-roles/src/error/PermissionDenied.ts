import { BaseError } from "./BaseError";

export class PermissionDenied extends BaseError {
  constructor() {
    super("Seu usuário não tem permissão para esse acesso!", 401);
  }
}
