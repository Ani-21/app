'use client'

import { useState, useEffect, useRef, SyntheticEvent } from 'react'

import getComments from 'lib/getComments'
import postComment from 'lib/postComment'
import getPost from 'lib/getPost'
import PostCard from 'src/components/cards/Post'
import Comments from 'src/components/Comments'
import BackArrowLink from '@src/components/BackArrowLink'
import Skeleton from '@src/components/Spinner'
import Success from '@src/components/Success'

type Params = {
  params: {
    postId: string
  }
}

const Post = ({ params: { postId } }: Params) => {
  const [post, setPost] = useState<Post>(null)
  const [comments, setComments] = useState<PostComment[]>(null)
  const [isOpenedTooltip, setIsOpenedTooltip] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

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

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const data = await Promise.resolve(
      postComment(postId, inputRef.current.value),
    )
    setComments([...comments, data])
    inputRef.current.value = ''
  }

  useEffect(() => {
    fetchData()
  }, [postId])

  useEffect(() => {
    const interval = setInterval(() => setIsOpenedTooltip(false), 3000)

    return () => clearInterval(interval)
  })

  if (!post) return <Skeleton />

  return (
    <article className="max-w-sm rounded-lg overflow-hidden my-4">
      <BackArrowLink link="posts" />
      <PostCard post={post} />
      <Comments comments={comments} />
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
          <textarea
            id="comment"
            ref={inputRef}
            className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none "
            placeholder="Write a comment..."
            required
          />
        </div>
        <button
          id="tooltip-click"
          data-tooltip-target="tooltip-click"
          data-tooltip-trigger="click"
          type="submit"
          className="inline-flex items-center py-2.5 px-4 mx-4 text-xs font-medium text-center text-white bg-light rounded-lg focus:ring-4 focus:ring-light hover:bg-secondary"
        >
          Post comment
        </button>
        {isOpenedTooltip && <Success />}
      </form>
    </article>
  )
}

export default Post
