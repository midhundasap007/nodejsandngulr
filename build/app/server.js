"use strict";
/* app/server.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var compression_1 = __importDefault(require("compression"));
var socket_io_1 = __importDefault(require("socket.io"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var routers_1 = require("./routers");
var userrouter = new routers_1.UserRouter();
//import delay from 'express-delay';
// Create a new express application instance
var app = express_1.default();
//app.use(delay(3000));
// The port the express app will listen on
app.use(compression_1.default());
app.use(cors_1.default());
app.use(body_parser_1.default.json());
var port = process.env.PORT || 6000;
app.use(express_1.default.static(__dirname + '/public'));
//app.use('/static', express.static(path.join(__dirname, 'public')))
// Mount the WelcomeController at the /welcome route
app.use('/user', userrouter.router);
// app.use( express.static(path.join(__dirname, '../../PDF')))
// Serve the application at the given port
var server = app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
var io = socket_io_1.default.listen(server);
var socket = io.on('connection', function (socket) {
    console.log('new connection made');
});
exports.Socket = socket;
