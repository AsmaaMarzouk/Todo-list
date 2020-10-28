import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { Todo } from './todo.entity';
import { from } from 'rxjs';
@Module({
  imports : [TypeOrmModule.forFeature([Todo])],
  providers: [TodoService],
  controllers : [TodoController],
  exports : [TypeOrmModule]

})
export class TodoModule {}
