import { Body, Controller, UseFilters, ValidationPipe } from '@nestjs/common';
import {GrpcMethod,ClientGrpc} from '@nestjs/microservices'
import {UserService} from './user.service'
import {UserInfo} from './interfaces/user-info.interface'
import {RegisterDto} from './dto/register.dto'
import { ExceptionFilter } from 'src/common/filters/rpc-exception.filter';
import { LoginDto } from './dto/login.dto';
import {GetUserByEmailDto} from './dto/get-user-by-email.dto'
import { GetUserByIDDto } from './dto/get-user.dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}

    @GrpcMethod('UserService','register')
    async register(@Body() registerDto: RegisterDto) {
        return this.userService.register(registerDto)
    }
    
    @GrpcMethod("UserService","login")
    async login(@Body() loginDto: LoginDto){
        return this.userService.login(loginDto)
    }

    @GrpcMethod("UserService","getUser")
    async getUser(@Body() getUserByIDDto: GetUserByIDDto){
        return this.userService.getUserByID(getUserByIDDto)
    }

}

