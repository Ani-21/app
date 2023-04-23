import React from 'react'

type CommentCardProps = {
  comment: PostComment
}

const CommentCard = ({ comment }: CommentCardProps) => (
  <li className="pb-3 sm:pb-4">
    <div className="flex items-center space-x-4">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {comment.name}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {comment.email}
        </p>
      </div>
    </div>
  </li>
)

export default CommentCard
