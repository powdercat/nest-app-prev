import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthsService } from "./auths.service";

@Controller("auths")
export class AuthsController {
  constructor(private readonly authService: AuthsService) {}

  @Post("login")
  login(@Body() userData: CreateUserDto) {
    return this.authService.login(userData);
  }

  @Post("register")
  register(@Body() userData: CreateUserDto) {
    return this.authService.register(userData);
  }
}
