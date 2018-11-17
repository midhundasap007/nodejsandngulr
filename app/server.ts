/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import sockio  from 'socket.io'

import dotenv from 'dotenv';
dotenv.config();

import {UserRouter} from './routers';

let userrouter=new UserRouter();
//import delay from 'express-delay';

// Create a new express application instance
const app: express.Application = express();

//app.use(delay(3000));

// The port the express app will listen on

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 6000;
app.use(express.static(__dirname + '/public'));

//app.use('/static', express.static(path.join(__dirname, 'public')))

// Mount the WelcomeController at the /welcome route
app.use('/user',userrouter.router);

// app.use( express.static(path.join(__dirname, '../../PDF')))

// Serve the application at the given port
let server=app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});


let io = sockio.listen(server);

let socket =io.on('connection', (socket) => {
  console.log('new connection made');
});

export const Socket = socket;



