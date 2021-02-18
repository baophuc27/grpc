import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { config } from 'dotenv';
import {TokenPayload} from './interfaces/token-payload.interface'
import {InjectModel} from '@nestjs/mongoose'
import {User,UserSchema} from './schemas/user.schema'
import {Model} from 'mongoose'
config()

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel(User.name) private userModel : Model<User>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.JWT_SECRET,
        })
    }

    async validate(payload) {
        const { email } = payload
        const user = await this.userModel.findOne({email: email})
        if (!user){
            throw new UnauthorizedException()
        }
        return user
    }
}