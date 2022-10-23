import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.userService.getAll();
  }

  @Post()
  create(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }
}
