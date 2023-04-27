import PostCard from './cards/Post'

type PostListProps = {
  postsList: Post[]
}
const Posts = ({ postsList }: PostListProps) => (
  <section className="py-8 lg:py-16">
    <ul className="max-w-md divide-y divide-gray-200">
      {postsList.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  </section>
)

export default Posts
