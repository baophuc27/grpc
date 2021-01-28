import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {MongooseModule} from '@nestjs/mongoose'
import {User,UserSchema} from './schemas/user.schema'
import {JwtStrategy} from './jwt.strategy'
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { PassportModule } from '@nestjs/passport';
import { FilesService } from 'src/files/files.service';


@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: process.env.JWT_ACCESS_TOKEN_DURATION,
    },
  }) ],
  providers: [UserService,JwtStrategy,FilesService],
  controllers: [UserController],
  exports: [JwtStrategy,UserService,JwtModule,PassportModule]
})


export class UserModule {}
