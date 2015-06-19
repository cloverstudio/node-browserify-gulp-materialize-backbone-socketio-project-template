
var path = require('path');
var options = {
    secret: "a secret key for session",
}
var server = require("sockpress").init(options);
var port = process.argv[2];

// HTTP Routes
server.use(server.express.static(path.join(__dirname, '/../../public')));

// Realtime Routes
server.io.on('connection', function(socket) {
    if(socket.session.authenticated) {
        // do stuff
    }
    console.log('New client connected!');
});

server.listen(port);
console.log('Server listening on port ' + port + ' !');

