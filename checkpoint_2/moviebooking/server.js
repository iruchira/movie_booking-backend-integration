

const http = require('http');

const server = http.createServer((request, response) => {
    console.log(`method: ${request.method}`);
    console.log(`url: ${request.url}`);

    if (request.url == '/movies') {
        if (request.method == 'GET') {
            response.write("All Movies Data in JSON format from Mongo DB");
        } 
    } 
    else if (request.url == '/genres') {
        if (request.method == 'GET') {
            response.write("All Genres Data in JSON format from Mongo DB");
        }
    } else if (request.url == '/artists') {
        if (request.method == 'GET') {
            response.write("All Artists Data in JSON format from Mongo DB");
        }
    }
    response.end();
});

server.listen(3000, () => {
    console.log('server started on port 3000');
});