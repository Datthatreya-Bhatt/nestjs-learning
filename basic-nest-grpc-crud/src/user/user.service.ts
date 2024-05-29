import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private db: any[] = []

    constructor(){}

    create(data){
        this.db.push(data);
        return {
            response: this.db
        }
    }

    update(id, data){
        for(let i=0; i<this.db.length; i++){
            if(this.db[i].id === id){
                this.db[i] = data;
            }
        }

        return {response: 'success'}
    }

    delete({id}){
        this.db = this.db.filter((el)=> el.id !== id);

        return {response: 'success'}
    }

    findOne({id}){
        let data = this.db.filter((el)=> el.id === id);
        return{
            response: data
        }
    }

    findAll(){
        return {
            response: this.db
        }
    }
}
