import Link from 'next/link'
import getAllPosts from 'lib/getAllPosts'

const PostsPage = async () => {
  const posts: Promise<Post[]> = getAllPosts()

  const postsData = await posts
  return (
    <section>
      <h2>Posts</h2>
      <p>
        <Link href="/">Back to Home Page</Link>
      </p>
      <br />
      {postsData.map(post => (
        <>
          <p key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </p>
          <br />
        </>
      ))}
    </section>
  )
}

export default PostsPage
