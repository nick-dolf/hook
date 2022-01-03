const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 50000

app.use(bodyParser.json())

app.post('/hook/home', (req, res) => {
	console.log('received webhook')
	res.status(200).end()
})

app.listen(PORT, 'localhost', () => console.log(`listening on ${PORT}`))
