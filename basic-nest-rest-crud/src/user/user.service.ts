import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private data:any[] = []
    
    constructor(){}

    create(item){
        this.data.push(item);
        return this.data;
    }

    delete(id){
        this.data = this.data.filter((data)=> data.id !== id)
        return "Success"
    }

    update(id, data){
        for(let i=0; i<this.data.length; i++){
            if(this.data[i].id === id){
                this.data[i] = data;
            }
        }

        return this.data;
    }

    findAll(){
        return this.data;
    }

    findById(id){
        let out = this.data.filter((el)=> el.id === id);
        return out;
    }

}
