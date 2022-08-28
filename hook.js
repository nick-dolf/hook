const express = require('express')
const bodyParser = require('body-parser')
const exec = require('child_process').exec

const app = express()
const PORT = 50000

app.use(bodyParser.json())

// Home Page
app.post('/home', (req, res) => {
	exec('cd ~/home && git pull')
	res.status(200).end()
})

// Webhook handler
app.post('/hook', (req, res) => {
	exec('cd ~/hook && git pull')
	res.status(200).end()
})

// Staging authentication
app.post('/admin', (req, res) => {
	exec('cd ~/admin && git pull')
	res.status(200).end()
})

// Aoclock
app.post('/aoclock', (req, res) => {
	exec('cd ~/aoclock && git pull')
	res.status(200).end()
})

// Chords
app.post('/chords', (req, res) => {
	exec('cd ~/src/chords && git pull')
	exec('cd ~/src/chords && npm run build && rm -r ~/build/chords && mv build ~/build/chords')
	res.status(200).end()
})

// Chords Api
app.post('/api-chords', (req, res) => {
	exec('cd ~/api/api-chords && git pull')
	res.status(200).end()
})

// Jade Website
app.post('/jade', (req, res) => {
	exec('cd ~/jade && git pull')
	res.status(200).end()
})

// Staging Site for Tatlo
app.post('/tatlo', (req, res) => {
	exec('cd ~/src/tatlo && git pull')
	exec('cd ~/src/tatlo && make staging')
	res.status(200).end()
})

// Staging Site for Code for Chicago CEIC project
app.post('/ceic-jekyll', (req, res) => {
	exec('cd ~/src/ceic && git pull')
	exec('cd ~/src/ceic && make staging')
	res.status(200).end()
})

app.listen(PORT, 'localhost', () => console.log(`listening on ${PORT}`))
