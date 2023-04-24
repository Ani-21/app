import Link from 'next/link'
import getAllPosts from 'lib/getAllPosts'
import Posts from '../../components/Posts'

const PostsPage = async () => {
  const posts: Promise<Post[]> = getAllPosts()

  const postsData = await posts
  return (
    <section>
      <p>
        <Link href="/">Back to Home Page</Link>
      </p>
      <br />
      <Posts postsList={postsData} />
    </section>
  )
}

export default PostsPage
