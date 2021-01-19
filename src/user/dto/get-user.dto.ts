import { IsNotEmpty, IsString } from "class-validator";


export class GetUserByIDDto{
    @IsString()
    @IsNotEmpty()
    userId: number;
}