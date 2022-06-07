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
app.post('/staging-auth', (req, res) => {
	exec('cd ~/staging-auth && git pull')
	res.status(200).end()
})

// Aoclock
app.post('/aoclock', (req, res) => {
	exec('cd ~/aoclock && git pull')
	res.status(200).end()
})

// Staging Site for Tatlo
app.post('/tatlo', (req, res) => {
	exec('cd ~/src/tatlo && git pull')
	exec('cd ~/src/tatlo && jekyll build -d ~/staging/tatlo -b /tatlo')
	res.status(200).end()
})

// Staging Site for Code for Chicago CEIC project
app.post('/ceic-jekyll', (req, res) => {
	exec('cd ~/c4c/ceic-jekyll && git pull')
	exec('cd ~/c4c/ceic-jekyll && bundle exec jekyll build -d ~/c4c/jekyll-ceic -b /jekyll-ceic')
	res.status(200).end()
})

app.listen(PORT, 'localhost', () => console.log(`listening on ${PORT}`))
