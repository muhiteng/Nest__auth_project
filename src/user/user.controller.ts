import { Controller, Delete, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from 'express';

@Controller('/user')
export class UserController{
@Get()
getUser()
{
    return 'r';
}

@Post('/')
store(@Req() request: Request){
  return request.body;
}
// @Get('/:id')
// getUserId(@Param() userId:number ){
//   return userId;
// }
@Get('/:userId')
getUserId(@Param() params: {userId:number} ){
  return params.userId;
}
@Delete('/:userId')
deleteUserId(@Param() params: {userId:number} ){
  return params.userId;
}
}