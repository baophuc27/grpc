import { Body, Controller, Get, Post, UseFilters, UseGuards, ValidationPipe ,Req, Query} from '@nestjs/common';
import {GrpcMethod,ClientGrpc,Client} from '@nestjs/microservices'
import {UserService} from './user.service'
import {RegisterDto} from './dto/register.dto'
import { LoginDto } from './dto/login.dto';
import { GetUserByIDDto } from './dto/get-user.dto';
import { GrpcAuthGuard } from 'src/user/guards/grpc-auth.guard';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';


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
    async getUser(@Query() getUserByIDDto: GetUserByIDDto){
        return this.userService.getUserByID(getUserByIDDto)
    }

    @Post('/update-avatar')
    async updateAvatar(){
        return ({code: 200, message: "Chua xong :D"})
    }

    @Post('change-password')
    async changePassword(){
        return ({code: 200, message: "Dang lam :D"})
    }

    @GrpcMethod("UserService",'test')
    async test(test:string){
        return this.userService.test()
    }
}

