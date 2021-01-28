import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { config } from 'dotenv';
import {TokenPayload} from './interfaces/token-payload.interface'
import {InjectModel} from '@nestjs/mongoose'
import {User,UserSchema} from './schemas/user.schema'
import {Model} from 'mongoose'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel(User.name) private userModel : Model<User>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:'TGa6zx4x|(\Y^KZ*j.P2ZSMjc8f72h0<ra4JbkL`+ElPh%}~20WVgaf=TG5tQru',
        })
    }

    async validate(payload) {
        const { email } = payload
        console.log(payload)
        const user = await this.userRepository.findOne({ email, isDeleted: false });

        if (!user) {
            throw new UnauthorizedException();
        }

        return user
    }
}