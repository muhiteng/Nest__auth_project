import { Body, Injectable, Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
    getUser()
{
    return 'r';
}


// store(@Req() request: Request){
//   return request.body;
// }
store(body: any){
    return body;
  }

// getUserId(@Param() userId:number ){
//   return userId;
// }
update(@Req() request: Request,@Param() params: {userId:number}){
    return params;
  }
getUserId(@Param() params: {userId:number} ){
  return params.userId;
}

deleteUserId(@Param() params: {userId:number} ){
  return params.userId;
}
}
