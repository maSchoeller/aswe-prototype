import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall, ServerWritableStream } from "grpc";
import { LightControlServiceService } from "../proto/LightControlService_grpc_pb";
import { ConnectionParameters, LightColor } from "../proto/LightControlService_pb";

import express from 'express';
import { Server as SocketIOServer, Socket } from 'socket.io';
import http from 'http';
import path from 'path';

import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';


// ##### GRPC SETUP #####
const machines: string[] = [];
const subject = new Subject<{ name: string, color: { red: number, green: number, blue: number }}>();

const grpcServer = new Server();
grpcServer.addService(LightControlServiceService, {
    getLightUpdates(call: ServerWritableStream<ConnectionParameters, LightColor>) {
        const clientName: string = call.request.getClientname();
        console.log(`[MACHINE]: <${clientName}> connected`);
        io.emit('machine connect', clientName);
        machines.push(clientName);

        subject.asObservable()
            .pipe(filter(data => data.name === clientName))
            .subscribe(data => {
                const { red, green, blue } = data.color;
                const color = new LightColor();
                color.setRed(red);
                color.setGreen(green);
                color.setBlue(blue);

                call.write(color);
            });

        call.on('cancelled', () => {
            machines.splice(machines.indexOf(clientName), 1);
            io.emit('machine disconnect', clientName);
            console.log(`[MACHINE]: <${clientName}> connection lost`);
        });
    }
});

const grpcPort = process.env.GRPC_PORT || 3001;
const uri = `0.0.0.0:${grpcPort}`;
console.log(`GRPC server listening on ${uri}`);
grpcServer.bind(uri, ServerCredentials.createInsecure());

grpcServer.start();


// ##### EXPRESS SETUP #####

const app = express();
const httpServer = http.createServer(app);
const io = new SocketIOServer(httpServer);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

io.on('connection', (socket: Socket) => {
    socket.emit('set machines', machines);
    socket.on('color change', colorInfo => {
        subject.next(colorInfo);
        socket.broadcast.emit('color change', colorInfo);
    });
});

httpServer.listen(PORT, () => {
    console.log(`HTTP server listening on http://localhost:${PORT}`);
});
