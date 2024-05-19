import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(public readonly userService: UserService){}

    @Post('/create' )
    create(@Body() data: any){
       return this.userService.create(data);

    }

    @Post('/update/:id')
    update(@Body() data:any, @Param('id') id: any){
        return this.userService.update(`${id}` ,data)

    }

    @Get('/findone/:id')
    findOne(@Param('id') id:any){
        console.log(id, 'This is id in findOne');
        return this.userService.findById(id);

    }

    @Get('/findAll')
    findAll(){
        console.log('This is findAll');
        return this.userService.findAll();
    }

    @Get('/delete/:id')
    delete(@Param('id') id:any){
        console.log(id, 'This is id in delete');
        return this.userService.delete(id);
    }



}


