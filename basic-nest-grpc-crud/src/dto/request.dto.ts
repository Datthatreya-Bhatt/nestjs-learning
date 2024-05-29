import { IsDefined, IsNotEmpty, IsString } from "class-validator";




export class CreateRequest{
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    id: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    name: string


    @IsDefined()
    @IsNotEmpty()
    @IsString()
    email: string


}


export class UpdateRequest{
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    id: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    name: string


    @IsDefined()
    @IsNotEmpty()
    @IsString()
    email: string


}


export class DeleteRequest{
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    id: string
}

export class FindOneRequest{
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    id: string
}


export class FindAllRequest{
    
}