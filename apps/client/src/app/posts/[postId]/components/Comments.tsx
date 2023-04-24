import CommentCard from './CommentCard'

type Props = {
  comments: PostComment[]
}
const Comments = ({ comments }: Props) => (
  <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
    {comments.map(comment => (
      <CommentCard key={comment.id} comment={comment} />
    ))}
  </ul>
)

export default Comments
