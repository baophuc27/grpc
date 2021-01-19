import {Prop,Schema,MongooseModule,SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import { Method } from 'protobufjs'


@Schema()
export class User extends Document{
    @Prop({required: true})
    userID: string

    @Prop({required: true})
    email: string

    @Prop({required: true})
    firstName: string

    @Prop({required: true})
    lastName: string

    @Prop({required: true})
    phone: string

    @Prop({required: false})
    dateOfBirth: Date

    @Prop({required: false})
    address: string

    @Prop({required: true})
    password: string

    @Prop({required: false})
    salt: string

}

export const UserSchema = SchemaFactory.createForClass(User)

