import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MoviesModule } from "./movies/movies.module";
import { UsersModule } from "./users/users.module";
import { AuthsModule } from "./auths/auths.module";

@Module({
  imports: [MoviesModule, UsersModule, AuthsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
