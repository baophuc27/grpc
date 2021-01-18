import { Body, Controller, ValidationPipe } from '@nestjs/common';
import {GrpcMethod,ClientGrpc} from '@nestjs/microservices'
import {UserService} from './user.service'
import {UserInfo} from './interfaces/user-info.interface'
import {RegisterDto} from './dto/register.dto'

@Controller('user')
export class UserController {
    private userService : UserService;

    @GrpcMethod('UserService','register')
    async register(@Body(ValidationPipe) registerDto: RegisterDto){
        return this.userService.register(registerDto)
    }
    
}

