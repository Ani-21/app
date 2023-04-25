'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import getAllPosts from 'lib/getAllPosts'
import Posts from 'src/components/Posts'

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>(null)

  const fetchData = async () => {
    const postsData: Promise<Post[]> = await Promise.resolve(getAllPosts())
    // @ts-ignore
    setPosts(postsData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!posts) return <p>Loading ... </p>

  return (
    <section>
      <p>
        <Link href="/">Back to Home Page</Link>
      </p>
      <br />
      <Posts postsList={posts} />
    </section>
  )
}

export default PostsPage
