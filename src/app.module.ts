import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import { Todo } from './todo/todo.entity';
import { TodoService } from './todo/todo.service';
import {Repository} from 'typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/auth/local.strategy';
import { AuthService } from './auth/auth/auth.service';
import { UsersModule } from './users/users/users.module';
import { JwtModule,JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users/users.service';
import { JwtAuthGuard } from './auth/auth/jwt-auth.guard';
import { jwtConstants} from './auth/auth/constants';
import { ExtractJwt, Strategy }  from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { JwtStrategy } from './auth/auth/jwt.strategy';
import { AuthGuard } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/auth/roles.guard';
import { AuthModule } from './auth/auth/auth.module';
@Module({
  imports: [TypeOrmModule.forRoot(),TodoModule,Repository,PassportModule,UsersModule,JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),JwtAuthGuard,AuthModule],
  controllers: [AppController, TodoController],
  providers: [AppService,TodoService,LocalStrategy,UsersService,JwtStrategy,AuthService,{
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
})
export class AppModule {
  constructor(private readonly connection:Connection){}
}
