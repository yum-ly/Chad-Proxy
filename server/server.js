const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()


app.use(express.static('../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))