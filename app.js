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

app.post(/ceic-jekyll', (req, res) => {
	console.log('received webhook')
	console.log(req.body)
	exec('cd ~/c4c/ceic-jekyll && git pull')
	exec('cd ~/c4c/ceic-jekyll && jekyll build -d ~/ceic-jekyll -b https://nickdolf.com/ceic-jekyll')
	res.status(200).end()
})

app.listen(PORT, 'localhost', () => console.log(`listening on ${PORT}`))
