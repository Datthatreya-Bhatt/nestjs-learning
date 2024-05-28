import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateRequest, DeleteRequest, FindOneRequest, UpdateRequest } from './dto/request.dto';
import { CreateResponse, DeleteResponse, FindAllResponse, FindOneResponse, UpdateResponse } from './dto/response.dto';


@Controller('user')
export class UserController {
    constructor(public readonly userService: UserService){}

    @Post('/create' )
    @UsePipes()
    create(@Body() data: CreateRequest): CreateResponse{
       return this.userService.create(data);

    }

    @Post('/update/:id')
    update(@Body() data:UpdateRequest, @Param('id') id: any): UpdateResponse{
        return this.userService.update(`${id}` ,data)

    }

    @Get('/findone/:id')
    findOne(@Param('id') id:FindOneRequest): FindOneResponse{
        console.log(id, 'This is id in findOne');
        return this.userService.findById(id);

    }

    @Get('/findAll')
    findAll(): FindAllResponse{
        console.log('This is findAll');
        return this.userService.findAll();
    }

    @Get('/delete/:id')
    delete(@Param('id') id:DeleteRequest): DeleteResponse{
        console.log(id, 'This is id in delete');
        return this.userService.delete(id);
    }



}


