import express from 'express'
import { IComment, IPost, IUser } from './lib'

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  res.send('Posts App Server')
})

app.get('/api/posts', async (req, res) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data: IPost[] = await response.json()
    res.json(data)
  } catch (err) {
    throw new Error()
  }
})

app.get('/api/posts/:id/comments', async (req, res) => {
  try {
    const postId = req.params.id
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    )
    const data: IComment[] = await response.json()
    res.json(data)
  } catch (err: unknown) {
    throw new Error()
  }
})

app.get('/api/users', async (req, res) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data: IUser[] = await response.json()
    res.json(data)
  } catch (err) {
    throw new Error()
  }
})

app.get('/api/users/:id/posts', async (req, res) => {
  try {
    const userId = Number(req.params.id)

    const responsePosts = await fetch('http://localhost:8080/api/posts')
    const dataPosts: IPost[] = await responsePosts.json()

    const userPosts: IPost[] = dataPosts.filter(item => item.userId === userId)

    res.json(userPosts)
  } catch (err) {
    throw new Error()
  }
})

app.get('/api/comments', async (req, res) => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments',
    )
    const data: IComment[] = await response.json()
    res.json(data)
  } catch (err) {
    throw new Error()
  }
})

app.post('/api/comments', (req, res) => {
  try {
    const data: IComment = req.body
    res.send(JSON.stringify(data))
  } catch (err) {
    throw new Error()
  }
})

app.listen(PORT)
