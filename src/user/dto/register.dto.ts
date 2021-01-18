import {IsNotEmpty,IsNumber,IsString,IsEmail, IsNumberString, MinLength} from 'class-validator'

export class RegisterDto{

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;


    @IsString()
    dateOfBirth

    @IsString()
    address: string;

    @IsNumberString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;
}