import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthsService {
  // private users: User[] = [];

  constructor(private readonly userService: UsersService) {}

  login(userData: CreateUserDto) {
    const user = this.userService.getOneByEmail(userData.email);
    if (!user) {
      throw new NotFoundException(`이메일이 ${userData.email} 인 유저가 없습니다.`);
    }
    // TODO: 비밀번호 암호화 하는 폴더 위치를 어디로 해야하는지 모르겠음
    if (user.password !== userData.password) {
      throw new BadRequestException(`비밀번호가 일치하지 않습니다.`);
    }
  }

  register(userData: CreateUserDto) {
    const user = this.userService.getOneByEmail(userData.email);
    if (user) {
      throw new BadRequestException(`이메일이 ${userData.email} 인 유저가 이미 존재합니다.`);
    }
    this.userService.users.push({
      id: this.userService.users.length + 1,
      ...userData,
    });
  }
}
