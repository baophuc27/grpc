import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {MongooseModule} from '@nestjs/mongoose'
import {User,UserSchema} from './schemas/user.schema'
import {JwtStrategy} from './jwt.strategy'
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { PassportModule } from '@nestjs/passport';
require('dotenv').config()

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: 'ARI',
    signOptions: {
      expiresIn: '30d',
    },
  }) ],
  providers: [UserService,JwtStrategy],
  controllers: [UserController],
  exports: [JwtStrategy,UserService,JwtModule,PassportModule]
})


export class UserModule {}
