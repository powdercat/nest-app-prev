import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MoviesModule } from "./movies/movies.module";
import { UsersModule } from "./users/users.module";
import { AuthsModule } from "./auths/auths.module";
import { MyTypeOrmModule } from "./database/typeorm.module";

@Module({
  imports: [MyTypeOrmModule, MoviesModule, UsersModule, AuthsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
