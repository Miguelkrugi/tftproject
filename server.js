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
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const Nexmo = require('nexmo')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
nunjucks.configure('views', {express: app})


const nexmo = new Nexmo({

   apiKey: 'abce5639',
   apiSecret: 'L5FRitSR5lH6RGpP'

})

///////////OTHER CODE//////////

const cors = require('cors');

const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true,
   optionSucessStatus: 200
}
const port = 3000


app.get('/', (req, res) => res.send('Server is Upp!'))



app.use(cors(corsOptions));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

