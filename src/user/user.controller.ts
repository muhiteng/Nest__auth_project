import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { UserService } from "./user.service";

@Controller('/user')
export class UserController{
    constructor(private userservice:UserService)
    {}
@Get()
getUser()
{
    return this.userservice.getUser();
}

@Post('/')
store(@Req() request: Request){
  return this.userservice.store(request);
}
@Patch('/:userId')
update(@Req() request: Request,@Param() params: {userId:number}){
  return this.userservice.update(request,params);
}
// @Get('/:id')
// getUserId(@Param() userId:number ){
//   return userId;
// }
@Get('/:userId')
getUserId(@Param() params: {userId:number} ){
  return this.userservice.getUserId(params);
}
@Delete('/:userId')
deleteUserId(@Param() params: {userId:number} ){
  return this.userservice.deleteUserId(params);
}
}