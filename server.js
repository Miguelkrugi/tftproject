/*const express = require('express')
const app = express()
app.get('/users', (req, res) => res.send('Ola Mundo!'))

//app.listen(8080, () => console.log('Node.js app listening on port 8080.'))

app.listen(3000, () => console.log('Node.js app listening on port 3000.'))
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Server is Up!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
