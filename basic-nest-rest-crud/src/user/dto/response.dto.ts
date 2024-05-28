// import {IsDefined, IsString} from 'class-validator'


export class CreateResponse{
    // @IsDefined()
    // @IsString()
    // id: string

    // @IsDefined()
    // @IsString()
    // name: string

    // @IsDefined()
    // @IsString()
    // email: string

    items: {
        id: string;
        name: string;
        email: string;
    }[]
}


export class UpdateResponse{
    // @IsDefined()
    // @IsString()
    // id: string

    // @IsDefined()
    // @IsString()
    // name: string

    // @IsDefined()
    // @IsString()
    // email: string

    items: {
        id: string;
        name: string;
        email: string;
    }[]
}



export class DeleteResponse{
    // @IsDefined()
    // @IsString()
    // id: string
    
    items: string
}

export class FindOneResponse{
    // @IsDefined()
    // @IsString()
    // id: string


    items: {
        id: string;
        name: string;
        email: string;
    }[]
}


export class FindAllResponse{
    items: {
        id: string;
        name: string;
        email: string;
    }[]
}