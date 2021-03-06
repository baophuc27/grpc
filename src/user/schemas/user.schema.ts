import {Prop,Schema,MongooseModule,SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import {} from 'class-transformer'


@Schema()
export class User extends Document{
    @Prop({required: true})
    userId: string

    @Prop({required: true})
    email: string

    @Prop({required: true})
    firstName: string

    @Prop({required: true})
    lastName: string

    @Prop({required: true})
    phone: string

    @Prop({required: false})
    dateOfBirth: string

    @Prop({required: false})
    address: string

    @Prop({required: true})
    password: string

    @Prop({required: false})
    salt: string

    @Prop({required: false})
    avatar: string
}

export const UserSchema = SchemaFactory.createForClass(User)

