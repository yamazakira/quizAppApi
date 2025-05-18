import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty() @MinLength(4)
    name: string;

    @IsEmail() @IsNotEmpty()
    email: string;

    @MinLength(6)
    password: string;
}
