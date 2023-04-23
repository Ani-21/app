import Link from 'next/link'
import getAllPosts from 'lib/getAllPosts'
import PostList from './components/PostList'

const PostsPage = async () => {
  const posts: Promise<Post[]> = getAllPosts()

  const postsData = await posts
  return (
    <section>
      <p>
        <Link href="/">Back to Home Page</Link>
      </p>
      <br />
      <PostList postsList={postsData} />
    </section>
  )
}

export default PostsPage
