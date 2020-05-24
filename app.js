const http = require('http');
const express = require('express');

const app = express();
//listener gets called for every incoming req
const server = http.createServer(routes.handler);

server.listen(3000);