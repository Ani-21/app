import Link from 'next/link'

type PostCardProps = {
  post: Post
}
const PostCard = ({ post }: PostCardProps) => (
  <div className="max-w-sm p-6 bg-light border border-gray-200 rounded-lg shadow mb-5 hover:bg-primary cursor-pointer">
    <Link href={`/posts/${post.id}`}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {post.title}
      </h5>
    </Link>
    <p className="mb-3 font-normal text-gray-700 ">{post.body}</p>
  </div>
)

export default PostCard
