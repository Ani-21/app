/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client'

import { useState, useEffect } from 'react'

import getAllPosts from 'lib/getAllPosts'
import Posts from 'src/components/Posts'
import BackArrowLink from '@src/components/BackArrowLink'
import TopArrowLink from '@src/components/TopArrowLink'
import Spinner from '@src/components/Spinner'

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>(null)
  const [showBtn, setShowBtn] = useState(false)

  const fetchData = async () => {
    const postsData: Promise<Post[]> = await Promise.resolve(getAllPosts())
    // @ts-ignore
    setPosts(postsData)
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const handleScrollBtn = () => {
      window.pageYOffset > 100 ? setShowBtn(true) : setShowBtn(false)
    }
    window.addEventListener('scroll', handleScrollBtn)

    return () => window.removeEventListener('scroll', handleScrollBtn)
  }, [])
  if (!posts) return <Spinner />

  return (
    <section>
      <BackArrowLink link="/" />
      {showBtn ? <TopArrowLink onClick={handleScrollToTop} /> : null}
      <Posts postsList={posts} />
    </section>
  )
}

export default PostsPage
