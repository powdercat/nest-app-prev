import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  public users: User[] = [];

  create(userData: CreateUserDto) {
    this.users.push({
      id: this.users.length + 1,
      ...userData,
    });
  }

  getAll(): User[] {
    return this.users;
  }

  getOneById(id: number): User {
    const user = this.users.find(user => user.id === +id);
    return user;
  }

  getOneByEmail(email: string): User {
    const user = this.users.find(user => user.email == email);
    return user;
  }
}
