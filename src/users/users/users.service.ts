import { Injectable } from '@nestjs/common';
export type User = any;
@Injectable()
export class UsersService {
    validateToken(authorization: any): boolean | Promise<boolean> | import("rxjs").Observable<boolean> {
        throw new Error('Method not implemented.');
    }
    private readonly users: User[];
    constructor() {
        this.users = [
          {
            userId: 1,
            username: 'asmaa',
            password: 'password',
          },
          {
            userId: 2,
            username: 'ahmed',
            password: 'secret',
          },
          {
            userId: 3,
            username: 'user',
            password: 'testpass',
          },
        ];
      }
    
      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}
