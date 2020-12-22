const { Server } = require('http');
console.log(process.env.PORT);
let server = Server((req, res) => {
console.log(req.url);
    let body = '';
    req.on('data', data => body += data);
    req.on('end', _ => {
        if(req.url === '/result4/') {
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method': 'GET,POST,PUT,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers',
            });
            res.write(JSON.stringify({
                'message': 'the3rd',
                'x-result': req.headers['x-test'],
                'x-body': body,
            }));
            res.end();
        }
    });
});
server.listen(process.env.PORT, '0.0.0.0', () => console.log('server bound'));
server.on('error', () => console.log('error'));
