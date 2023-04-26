'use client'

import { useState, useEffect } from 'react'

import getAllPosts from 'lib/getAllPosts'
import Posts from 'src/components/Posts'
import BackArrowLink from '@src/components/BackArrowLink'

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
      <BackArrowLink link="/" />
      <Posts postsList={posts} />
    </section>
  )
}

export default PostsPage
