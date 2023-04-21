import express from 'express'

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Server')
})

app.listen(port, () => {
  console.log()
})
