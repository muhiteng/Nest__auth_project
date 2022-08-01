import { Body, Injectable, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user_update.dto';

@Injectable()
export class UserService {
    getUser()
{
    return 'r';
}


// store(@Req() request: Request){
//   return request.body;
// }
store(saveUserDto: CreateUserDto){
    return saveUserDto;
  }

// getUserId(@Param() userId:number ){
//   return userId;
// }
update(updateUser: UpdateUserDto,userId:number){
    return userId;
  }
getUserId(userId:number){
  return userId;
}

deleteUserId(userId:number ){
  return {userId};
}
}
