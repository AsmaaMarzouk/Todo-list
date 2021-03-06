import { Controller, Get,Request, Post ,UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/auth/local-auth.guard';
import { AuthService } from './auth/auth/auth.service';
import { JwtAuthGuard } from './auth/auth/jwt-auth.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
 
}
