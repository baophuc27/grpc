import { Injectable } from '@nestjs/common';
import {RegisterDto} from './dto/register.dto'
import {JwtService} from '@nestjs/jwt'
import {v1 as uuid} from 'uuid'
import Hashids = require('hashids/cjs')
import {InjectConnection} from '@nestjs/mongoose'
import {Connection, Model} from 'mongoose'
import { LoginDto } from './dto/login.dto';
import { GetUserByIDDto } from './dto/get-user.dto';
import grpc = require('grpc')
import {InjectModel} from '@nestjs/mongoose'
import {User,UserSchema} from './schemas/user.schema'
import {TokenPayload} from './interfaces/token-payload.interface'
import { TokenResponse } from './interfaces/token-response.interface'
import * as bcrypt from 'bcrypt';
import { RpcException } from '@nestjs/microservices';
import { GetUserByEmailDto } from './dto/get-user-by-email.dto';
import {UserInfo} from './interfaces/user-info.interface'
import moment = require('moment');
import { UpdateAvatarDto } from './dto/update-avatar.dto';


@Injectable()
export class UserService {
    constructor(
    @InjectConnection() private readonly connection: Connection,
    @InjectModel(User.name) private userModel : Model<User>,
    private jwtService: JwtService,
    ){}

    async register(registerDto : RegisterDto){
        console.log(registerDto)
        const {
            email,
            firstName,
            lastName,
            dateOfBirth,
            address,
            phone,
            password
        } = registerDto;
        
        await this.checkEmailAndPhone(email,phone)

        const createdUser =  new this.userModel(registerDto);
        

        const hashids =  new Hashids(email,6)
        const salt = await bcrypt.genSalt()
        const userPassword = await bcrypt.hash(password,salt)


        createdUser.password = userPassword
        createdUser.salt = salt
        createdUser.userID = uuid()
        createdUser.dateOfBirth = new Date(dateOfBirth)


        await createdUser.save()

        // Token
        const payload : TokenPayload = {email: createdUser.email, userId: createdUser.userID}
        const accessToken = this.jwtService.sign(payload)
        
        const refreshToken = this.jwtService.sign(payload, {expiresIn: '90d'})
        const tokenResponse: TokenResponse = {accessToken: accessToken, refreshToken: refreshToken}
        return tokenResponse
        
}
    async checkEmailAndPhone(email,phone){
        const duplicateEmail = await this.userModel.findOne({"email": email})

        if (duplicateEmail){
            throw new RpcException({
                code: grpc.status.ALREADY_EXISTS,
                message: 'Email already exist'
            })
        }

        const duplicatePhone = await this.userModel.findOne({"phone": phone})
        console.log(duplicatePhone)
        if (duplicatePhone){
            throw new RpcException({
                code: grpc.status.ALREADY_EXISTS,
                message: 'Phone number already exist'
            })
        }

    }

    

    async login(loginDto : LoginDto){
        const user = await this.validatePassword(loginDto)
        console.log(user)
        if (user){
            const payload : TokenPayload = {email: user.email, userId: user.userID}
            const accessToken = this.jwtService.sign(payload)

            const refreshToken = this.jwtService.sign(payload, {expiresIn: '90d'})
            const tokenResponse: TokenResponse = {accessToken: accessToken, refreshToken: refreshToken}
            console.log(tokenResponse)
            return tokenResponse
        }
        else{
            throw new RpcException({
                code : grpc.status.INVALID_ARGUMENT,
                message: "Invalid email or password"
            })
        }
    }

    async validatePassword(loginDto : LoginDto){
        const {email , password} = loginDto
        const user = await this.userModel.findOne({email: email})  
        if (user &&  await bcrypt.compare(password,user.password)){
            return user
        }
        return null
        
    }

    async getUserByID(getUserDto: GetUserByIDDto) {
        const {userId} =  getUserDto;
        console.log(userId)
        const user = await this.userModel.findOne({userID: userId.toString()})
        console.log(user)
        if (user){
            let userResponse : UserInfo  = {
                userId: userId.toString(),
                email: user.email,
                firstName : user.firstName,
                lastName: user.lastName,
                dateOfBirth: moment(user.dateOfBirth).format('MM/DD/YYYY'),
                address: user.address,
                phone: user.phone
            }
            return userResponse
        }
        throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: 'User not found'
        })

    }

    async getUserByEmail(getUserByEmailDto: GetUserByEmailDto){
        const {email} =  getUserByEmailDto;
        const user = await this.userModel.findOne({email: email})
        if (user){
            let userResponse : UserInfo  = {
                userId: user.userID,
                email: user.email,
                firstName : user.firstName,
                lastName: user.lastName,
                dateOfBirth: moment(user.dateOfBirth).format('MM/DD/YYYY'),
                address: user.address,
                phone: user.phone
            }
            return userResponse
        }
        throw new RpcException({
            code: grpc.status.NOT_FOUND,
            message: 'User not found'
        })
    }

    async updateAvatar(updateAvatarDto: UpdateAvatarDto){
        const {userId,avatar} = updateAvatarDto;

    }
}