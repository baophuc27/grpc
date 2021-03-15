import {IsNotEmpty,IsNumber,IsString,IsEmail, IsNumberString, MinLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class RegisterDto{

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @ApiProperty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;


    @IsString()
    @ApiProperty()
    dateOfBirth: string

    @IsString()
    @ApiProperty()
    address: string;

    @IsNumberString()
    phone: string;

}