import getComments from 'lib/getComments'
import getPost from 'lib/getPost'
import Link from 'next/link'
import PostCard from '../components/PostCard'
import CommentsSection from './components/Comments'

type Params = {
  params: {
    postId: string
  }
}

const Post = async ({ params: { postId } }: Params) => {
  const post: Promise<Post> = getPost(postId)
  const comments: Promise<PostComment[]> = getComments(postId)

  const [postData, commentsData] = await Promise.all([post, comments])

  return (
    <>
      <p>
        <Link href="/posts">Got Back to Posts</Link>
      </p>
      <br />
      <PostCard post={postData} />
      <CommentsSection comments={commentsData} />
    </>
  )
}

export default Post
