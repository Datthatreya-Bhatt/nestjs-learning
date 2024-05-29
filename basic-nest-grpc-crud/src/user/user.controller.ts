import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateRequest, DeleteRequest, FindOneRequest, UpdateRequest } from 'src/dto/request.dto';
import { CreateResponse, DeleteResponse, FindAllResponse, FindOneResponse, UpdateResponse } from 'src/dto/response.dto';
import { Metadata } from '@grpc/grpc-js';

@Controller()
export class UserController {
    constructor(public readonly userService: UserService){}

    @GrpcMethod('UserService', 'create')
    create(data: CreateRequest): CreateResponse {
        return this.userService.create(data);
    }

    @GrpcMethod('UserService', 'update')
    update(data: UpdateRequest, metadata: Metadata): UpdateResponse{
        let id = metadata.get('key')[0];
        return this.userService.update(id, data);
    }

    @GrpcMethod('UserService', 'delete')
    delete(id: DeleteRequest): DeleteResponse{
        return this.userService.delete(id);
    }

    @GrpcMethod('UserService', 'findOne')
    findOne(id: FindOneRequest): FindOneResponse{
        return this.userService.findOne(id);
    }

    @GrpcMethod('UserService', 'findAll')
    findAll(): FindAllResponse{
        return this.userService.findAll();
    }

}
