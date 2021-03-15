import { Body, Controller, Get, Post, UseFilters, UseGuards, ValidationPipe ,Req, Query, UploadedFile, UseInterceptors} from '@nestjs/common';
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
import { ChangePasswordDto } from './dto/change-password.dto';
import {Express, request} from 'express'
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';

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
    @UseGuards(AuthGuard())
    async getUser(@GetUser() user: User) {
        console.log(user)
        return this.userService.getUser(user)
    }

    @Post('/update-avatar')
    @UseGuards(AuthGuard())
    @UseInterceptors(FileInterceptor('file'))
    async updateAvatar(@Req() req,@GetUser() user: User, @UploadedFile() file){
        return this.userService.updateAvatar(user.userId,file.buffer,file.originalname)
    }

    @Post('change-password')
    @UseGuards(AuthGuard())
    async changePassword(@GetUser() user: User,@Body() changePasswordDto: ChangePasswordDto){
        return this.userService.changePassword(user.userId,changePasswordDto)
    }

    @Get('fetch-avatar')
    @UseGuards(AuthGuard())
    async fetchAvatar(@GetUser() user: User){
        return this.userService.fetchAvatar(user.userId)
    }
}

