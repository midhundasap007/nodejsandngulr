import { Router, Request, Response, NextFunction } from 'express';
import { userController } from '../controllers';
import { asyncWrapper } from './utils/asyncWrapper';
import {Socket} from '../server';
import request from 'request';
import delay from 'express-delay';

export class UserRouter {
    public router: Router;
    public userController = new userController();
    constructor() {
        this.router = Router();
         this.router.get('/',asyncWrapper(async (req: Request, res: Response,next: NextFunction) => {
          
           let response =   await this.userController.getuser();
           res.send(response); 
                   
        }));


        this.router.get('/status',asyncWrapper(async (req: Request, res: Response,next: NextFunction) => {
          let response =   await this.userController.getuserstatus();
          res.send(response);          
       }));

        this.router.get('/:search',asyncWrapper(async (req: Request, res: Response,next: NextFunction) => {
        
            let response =   await this.userController.getuserserch(req.params.search);
            res.send(response);          
         }));

        this.router.post('/', asyncWrapper(async(req: Request, res: Response,next: NextFunction) => {
         let msge= await this.message();
             Socket.emit('event2', {
                msg: 'Server to client, do you read me? Over.'
              });
            let response = await this.userController.adduser(req.body);
            console.log('response',response);
            console.log('remote Msg===>',msge);

          //  console.log('messge',msge);
            
            res.send(response);
        }));


        this.router.put('/', asyncWrapper(async(req: Request, res: Response,next: NextFunction) => {
            let response = await this.userController.edituser();
            res.send(response);
        }));

        this.router.delete('/:id', asyncWrapper(async(req: Request, res: Response,next: NextFunction) => {
            let id=req.params.id
            let response = await this.userController.deleteuser(id);
            res.send(response);
        }));

    }

     makeRequest(url) {
        return new Promise((resolve, reject) => {
            request(url, (error, response, body) => {
            if (error) {
              reject(error)
            }
            resolve(JSON.parse(body));
          });
        });
      }


      async  message() {
        try {
          const character = await this.makeRequest('https://swapi.co/api/people/1');
          const film = await this.makeRequest(character["films"][0]);
         // console.log(`${character["name"]} played in ${film["title"]}`);
          return character;
        } catch(error) {
          console.log(error);
        }
      }
}

