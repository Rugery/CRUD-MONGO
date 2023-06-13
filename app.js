const express = require('express');
const app = express();
app.use(express.static('public'));
const db = require('./db');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
const empleados = require('./routes/empleados')
app.use(empleados);

// app.get('/',(req, res)=>{
//     res.send('hola mundo');
// });

app.listen(3000, () => {
    console.log('server up in https:localhost:3000');
});