import { Body, Controller, Get, Post, UseFilters, UseGuards, ValidationPipe ,Req, Query} from '@nestjs/common';
import {GrpcMethod,ClientGrpc,Client} from '@nestjs/microservices'
import {UserService} from './user.service'
import {RegisterDto} from './dto/register.dto'
import { LoginDto } from './dto/login.dto';
import { GrpcAuthGuard } from 'src/user/guards/grpc-auth.guard';
import {GetUser} from './get-user.decorator' 
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { User } from './schemas/user.schema';
import { access } from 'fs';


@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
    private readonly userService : UserService)
    {}

    @Post('/register')
    async register(@Body(ValidationPipe) registerDto: RegisterDto) {
        console.log(registerDto)
        return this.userService.register(registerDto)
    }
    

    @Post('/login')
    @GrpcMethod("UserService","login")
    async login(@Body(ValidationPipe) loginDto: LoginDto){
        return this.userService.login(loginDto)
    }

    @Get('/profile')
    async getUser(@GetUser() accessToken: string): Promise<any> {
        
        return this.userService.getUserByID(accessToken)
    }

    @Post('/update-avatar')
    async updateAvatar(){
        return ({code: 200, message: "Chua xong :D"})
    }

    @Post('change-password')
    async changePassword(){
        return ({code: 200, message: "Dang lam :D"})
    }

}

