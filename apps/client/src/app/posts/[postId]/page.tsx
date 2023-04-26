'use client'

import { useState, useEffect, useRef, SyntheticEvent } from 'react'

import getComments from 'lib/getComments'
import postComment from 'lib/postComment'
import getPost from 'lib/getPost'
import PostCard from 'src/components/cards/Post'
import Comments from 'src/components/Comments'
import BackArrowLink from '@src/components/BackArrowLink'

type Params = {
  params: {
    postId: string
  }
}

const Post = ({ params: { postId } }: Params) => {
  const [post, setPost] = useState<Post>(null)
  const [comments, setComments] = useState<PostComment[]>(null)
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

  if (!post) return <p>Loading ... </p>

  return (
    <article className="max-w-sm rounded-lg overflow-hidden my-4">
      <BackArrowLink link="posts" />
      <PostCard post={post} />
      <Comments comments={comments} />
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <textarea
            id="comment"
            ref={inputRef}
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none bg-main dark:text-white dark:placeholder-gray-400 dark:bg-main"
            placeholder="Write a comment..."
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 mx-4 text-xs font-medium text-center text-white bg-light rounded-lg focus:ring-4 focus:ring-light dark:focus:ring-secondary hover:bg-secondary"
        >
          Post comment
        </button>
      </form>
    </article>
  )
}

export default Post
