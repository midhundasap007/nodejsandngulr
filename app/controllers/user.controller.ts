
import { userModel } from '../models';

export class userController {
    public userModel = new userModel();
    async getuser() {
        return await this.userModel.getuser();
    }

    async getuserstatus() {
        return await this.userModel.getuserstatus();
    }
    

    async getuserserch(search) {
        return await this.userModel.getuserserch(search);
    }
    

    async  adduser(data) {
    
        return await this.userModel.adduser(data);
    }
    async deleteuser(id) {
        return await this.userModel.deleteuser(id);
    }

    async edituser() {
        return await this.userModel.edituser();
    }

}