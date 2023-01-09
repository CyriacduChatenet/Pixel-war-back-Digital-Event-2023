import { AuthGuard, PassportStrategy } from "@nestjs/passport";

export class LocalAuthGuard extends AuthGuard('local') {}