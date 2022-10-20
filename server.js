/*const express = require('express')
const app = express()
app.get('/users', (req, res) => res.send('Ola Mundo!'))

//app.listen(8080, () => console.log('Node.js app listening on port 8080.'))

app.listen(3000, () => console.log('Node.js app listening on port 3000.'))
*/
/*
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));*/

const express = require('express')

const app = express()

const cors = require('cors');

const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true,
   optionSucessStatus: 200
}
const port = 8000


app.get('/', (req, res) => res.send('Server is Upp!'))

app.use(cors(corsOptions));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

