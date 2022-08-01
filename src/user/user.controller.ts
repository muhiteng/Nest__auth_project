import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { CreateUserDto } from "./dto/user-create.dto";
import { UpdateUserDto } from "./dto/user_update.dto";
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

// @Post('/')
// store(@Req() request: Request){
//   return this.userservice.store(request);
// }
@Post('/')
store(@Body() body: CreateUserDto){
  return this.userservice.store(body);
}
@Patch('/:userId')
update(@Body() updateUser: UpdateUserDto,@Param('userId',ParseIntPipe) userId: number){
  return this.userservice.update(updateUser,userId);
}
// @Get('/:id')
// getUserId(@Param() userId:number ){
//   return userId;
// }
@Get('/:userId')
getUserId(@Param('userId',ParseIntPipe) userId: number ){
  return this.userservice.getUserId(userId);
}
@Delete('/:userId')
deleteUserId(@Param('userId',ParseIntPipe) userId: number ){
  return this.userservice.deleteUserId(userId);
}
}