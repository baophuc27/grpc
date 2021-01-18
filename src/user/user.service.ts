import { Injectable } from '@nestjs/common';
import {RegisterDto} from './dto/register.dto'
import {JwtService} from '@nestjs/jwt'
import {v1 as uuid} from 'uuid'
import Hashids = require('hashids/cjs')
import {InjectConnection} from '@nestjs/mongoose'
import {Connection} from 'mongoose'


@Injectable()
export class UserService {
    constructor(
    @InjectConnection()
    private readonly connection: Connection){}

    async register(registerDto : RegisterDto){
        const {
            email,
            firstName,
            lastName,
            dateOfBirth,
            address,
            phone,
            password
        } = registerDto;
        const hashids =  new Hashids(email,6)
        console.log(registerDto)

}
}