import { IsArray, IsDefined, IsNotEmpty, IsString } from "class-validator";
import { CreateRequest, FindOneRequest } from "./request.dto";


export class CreateResponse{
    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    response: CreateRequest[]

}


export class UpdateResponse{
    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    response: string

}


export class DeleteResponse{
    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    response: string
}

export class FindOneResponse{
    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    response: FindOneRequest[]
}


export class FindAllResponse{
    
}