import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io';
import { createServer } from 'http';
import { socketController } from './sockets/controllers.js';

class Servidor {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        this.io = new Server(this.server);
        

        //MIDDLEWARES
        this.middlewares()

        //RUTAS DE MI APP
        this.routes()


        //Sockets
        this.sockets()
    }

    middlewares(){
        
        //CORS
        this.app.use(cors())

        //Directorio publico
        this.app.use( express.static('public'))
    }

    routes() {
        //ORDENAR ALFABETICAMENTE O LA RUTA DE AUTENTICACIÓN DE PRIMERA
        // this.app.use(this.authPath, routerLogin )
    }

    sockets(){
        this.io.on('connection', socketController)
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto',this.port)
        })
    }

}


export { Servidor } 