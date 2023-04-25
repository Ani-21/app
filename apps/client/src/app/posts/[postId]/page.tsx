'use client'

import { useState, useEffect } from 'react'

import getComments from 'lib/getComments'
import getPost from 'lib/getPost'
import Link from 'next/link'
import PostCard from 'src/components/cards/Post'
import Comments from 'src/components/Comments'

type Params = {
  params: {
    postId: string
  }
}

const Post = ({ params: { postId } }: Params) => {
  const [post, setPost] = useState<Post>(null)
  const [comments, setComments] = useState<PostComment[]>(null)

  const fetchData = async () => {
    try {
      const [postData, commentsData] = await Promise.all([
        getPost(postId),
        getComments(postId),
      ])
      setPost(postData)
      setComments(commentsData)
    } catch (err) {
      throw new Error()
    }
  }

  useEffect(() => {
    fetchData()
  }, [postId])

  if (!post) return <p>Loading ... </p>

  return (
    <>
      <p>
        <Link href="/posts">Got Back to Posts</Link>
      </p>
      <br />
      <PostCard post={post} />
      <Comments comments={comments} />
    </>
  )
}

export default Post
