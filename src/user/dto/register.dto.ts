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

    @ApiProperty()
    dateOfBirth: string

    @ApiProperty()
    address: string;

    @IsNumberString()
    @ApiProperty()
    phone: string;

    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;
}