import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello majed Yousef!';
  }
  getUser() {
    return {name:'muhamad',email:'muh.it.eng.19841984@gmail.com'};
  }
}
