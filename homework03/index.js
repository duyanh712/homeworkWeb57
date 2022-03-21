const express = require('express')
const evenNumbers = require('./even')
const app = express()
app.use(express.json())

app.get('/course', (req, res) => {
   res.send({course: "web67"})
})

app.get('/course/random', (req, res) => {
   let courses = [
      { "course": "c4e" }, 
      { "course": "ci" },
      { "course": "web57" }
   ]
   courseRandom = courses[Math.floor(Math.random() * courses.length)];
   res.send(courseRandom)
})

app.get('/even', (req, res) => {
   const from = parseInt(req.query['from'])
   const to = parseInt(req.query['to'])
   res.send({ "numbers": evenNumbers(from, to) })
})

app.get('/login', (req, res) => {
   console.log(__dirname);
   res.sendFile(__dirname + '/login.html')
})

app.post('/auth/login', (req, res) => {
   if (req.body.username === 'admin' && req.body.password === '123456') {
      res.send({ "success": true })
  } else {
      res.send({ "success": false })
  }
})

app.listen(9000, err => {
   if (err) {
      return console.log(err);
   }
   console.log('server started');
})