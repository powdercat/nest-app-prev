import { Module } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { AuthsController } from "./auths.controller";
import { AuthsService } from "./auths.service";

@Module({
  controllers: [AuthsController],
  providers: [AuthsService, UsersService],
})
export class AuthsModule {}
