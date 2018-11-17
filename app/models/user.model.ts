import { UserRepository,StatusRepository } from '../repositories';
import { resolve } from 'dns';

export class userModel {
    public restl;

    constructor() {
        console.log(UserRepository);
    }
    

    getuserall(result) {
       return result;
    }

     async getuser() {
         
         const users: any =  await UserRepository.findAll();


        return users;
    }

    async getuserstatus(){
        const status: any =  await StatusRepository.findAll();
        return status;
    }
    async getuserserch(search) {
        const users: any =  await UserRepository.findAll({
            where:{
                name:{
                like:'%'+search+'%'
                }
            }
        });
        return users;
    }
  
    

    async adduser(data) {
        let insert = await UserRepository.create(data);
        if (insert) {
            return true;
        } else {
            return false;
        }
    }

    async deleteuser(id) {

      let response= await  UserRepository.destroy({
            where: {
              id: id
            }
          });

          if (response) {
            return true;
        } else {
            return false;
        }
    }

    async edituser() {
        return 'editusersmodel';
    }

}