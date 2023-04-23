import { Suspense } from 'react'
import getComments from 'lib/getComments'
import getPost from 'lib/getPost'
import Comments from '../components/Comments'

type Params = {
  params: {
    postId: string
  }
}

const Post = async ({ params: { postId } }: Params) => {
  const post: Promise<Post> = getPost(postId)
  const comments: Promise<Comment[]> = getComments(postId)

  const postData = await post

  return (
    <article key={postData.id}>
      <h3>{postData.title}</h3>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <Comments promise={comments} />
      </Suspense>
    </article>
  )
}

export default Post
