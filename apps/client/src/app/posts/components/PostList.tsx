import PostCard from './PostCard'

type PostListProps = {
  postsList: Post[]
}
const PostList = ({ postsList }: PostListProps) => (
  <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
    {postsList.map(post => (
      <PostCard post={post} />
    ))}
  </ul>
)

export default PostList
