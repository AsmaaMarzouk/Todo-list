/*import { Injectable, CanActivate, ExecutionContext,Headers } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from './users.service'
@Injectable()
export class UserGuard implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    // Read token
    const authorization = request.headers('authorization');
    if (!authorization) {
      return false;
    }
    return this.userService.validateToken(authorization);
  }
}*/