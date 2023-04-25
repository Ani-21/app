import React from 'react'
import UserPhotoIcon from '../icons/UserPhoto'

type CommentCardProps = {
  comment: PostComment
}

const CommentCard = ({ comment }: CommentCardProps) => (
  <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
    <footer className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          <UserPhotoIcon />
          {comment.email}
        </p>
      </div>
    </footer>
    <p className="text-lg text-gray-600 dark:text-gray-400">{comment.name}</p>
    <p className="text-gray-500 dark:text-gray-400">{comment.body}</p>
  </article>
)

export default CommentCard
