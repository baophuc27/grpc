import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class GetUserByEmailDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
}