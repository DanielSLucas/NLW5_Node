import 'reflect-metadata';
import './database';
import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

import { routes } from './routes';

const app = express();
const http = createServer(app); // Criando protocolo http
const io = new Server(http);  // Criando protocolo websocket (ws)

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set("views", path.join(__dirname, '..', 'public'));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.json());
app.use(routes);


io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});

app.get("/pages/client", (request, response) => {
  return response.render('html/client.html')
});

app.get("/pages/admin", (request, response) => {
  return response.render('html/admin.html')
});

export { http, io };