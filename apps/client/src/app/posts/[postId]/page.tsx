import getComments from 'lib/getComments'
import getPost from 'lib/getPost'
import PostCard from '../components/PostCard'
import Comments from './components/Comments'

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
      <PostCard post={postData} />
      <Comments comments={commentsData} />
    </>
  )
}

export default Post
