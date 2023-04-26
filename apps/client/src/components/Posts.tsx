import PostCard from './cards/Post'

type PostListProps = {
  postsList: Post[]
}
const Post = ({ postsList }: PostListProps) => (
  <ul className="max-w-md divide-y divide-gray-200">
    {postsList.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </ul>
)

export default Post
