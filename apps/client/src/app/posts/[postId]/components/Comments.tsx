import FormComment from '@src/components/FormComment'
import CommentCard from './CommentCard'

type Props = {
  comments: PostComment[]
}
const CommentsSection = ({ comments }: Props) => (
  <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
    <div className="max-w-2xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion (20)
        </h2>
      </div>
      <FormComment />
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  </section>
)

export default CommentsSection
