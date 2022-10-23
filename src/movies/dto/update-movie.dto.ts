import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./creeat-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
