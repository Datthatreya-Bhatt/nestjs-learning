import {IsDefined, IsString} from 'class-validator'


export class CreateRequest{
    @IsDefined()
    @IsString()
    id: string

    @IsDefined()
    @IsString()
    name: string

    @IsDefined()
    @IsString()
    email: string

    // id: string
    // name: string
    // email: string

}


export class UpdateRequest{
    @IsDefined()
    @IsString()
    id: string

    @IsDefined()
    @IsString()
    name: string

    @IsDefined()
    @IsString()
    email: string

    
    // id: string
    // name: string
    // email: string


}



export class DeleteRequest{
    @IsDefined()
    @IsString()
    id: string    
}

export class FindOneRequest{
    @IsDefined()
    @IsString()
    id: string
}


export class FindAllRequest{
    
}