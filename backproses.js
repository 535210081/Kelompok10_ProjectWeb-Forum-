// function sayHello(name){
//     console.log('Hello' + name);
// }

// sayHello('Mosh');

// console.log(window.alert('Selamat datang!'));

var express = require('express')
const ejs = require('ejs')

var app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const fs  = require('fs')
const http = require('http')
const port = 8050;

app.get("/", (req,res)=>{
    return res.redirect('homepage.html');
})

app.get("/thread", (req,res)=>{
    return res.redirect('thread.html');
})

app.listen(port, () => {
    console.log(chalk.bgBlue('Server is on port 8050'));
});

const validator = require('validator');
const chalk = require('chalk');
const { listenerCount } = require('process');


//Root Route
// app.get('/', function(req,res){
//     res.render('homepage.ejs');
// });

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err){
//             res.writeHead(404);
//             res.write('Error: File not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// };

// http
//     .createServer((req, res) => {
//         res.writeHead(200, { 
//             'Content-Type': 'text/html',
//         });
//         var myReadStream = fs.createReadStream(__dirname + '/homepage.ejs', 'utf8');

//         const url = req.url;
//         if( url === '/index'){
//             res.write('Please go to Homepage');
//             res.end();
//         }
//         else if ( url === '/thread'){
//             renderHTML('./thread.ejs', res);
//         }
//         else{
//             myReadStream.pipe(res);
//         }
//         // res.write('Hello World');
//         // res.end();
//     })

//     .listen(port, () => {
//         console.log(chalk.bgBlue('Server is on port 8050'));
//     });