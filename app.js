const express = require('express')
const bodyParser = require('body-parser')
const exec = require('child_process').exec

const app = express()
const PORT = 50000

app.use(bodyParser.json())

app.post('/home', (req, res) => {
	console.log('received webhook')
	console.log(req.body)
	exec('cd ~/home && git pull')
	res.status(200).end()
})

app.listen(PORT, 'localhost', () => console.log(`listening on ${PORT}`))
