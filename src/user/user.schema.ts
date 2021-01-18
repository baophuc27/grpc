import {Prop,Schema,MongooseModule,SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'


@Schema()
export class User{
    @Prop()
    userID: {
        type: number,
        required: true
    }

    @Prop()
    email: {
        type: string,
        required: true
    }

    @Prop()
    firstName: {
        type: string,
        required: true
    }

    @Prop()
    lastName: {
        type: string,
        required: true
    }

    @Prop()
    dateOfBirth: {
        type : Date,
        required: false
    }

    @Prop()
    address: {
        type : string,
        required: false
    }

    @Prop()
    password: {
        type: string,
        required: true
    }

}

export const UserSchema = SchemaFactory.createForClass(User)