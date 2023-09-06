import http from 'http';
import chalk from 'chalk'
const host="localhost"; //Anfitrion
const port='9000';

const servidor=http.createServer(function(req, res) {
   res.writeHead(200,{'Content-Type':'application/json'});
   res.end(JSON.stringify({nombre:'Leyla', mensaje:'Este es mi servidor'}));
 
});

servidor.listen(port, host, function(){
   console.log(chalk.green(`El servidor está corriendo en: http://${host}:${port}`))
});