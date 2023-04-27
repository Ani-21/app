import UserPhotoIcon from '../icons/UserPhoto'

type CommentCardProps = {
  comment: PostComment
}

const CommentCard = ({ comment }: CommentCardProps) => (
  <article className="p-6 mb-6 text-base bg-white rounded-lg ">
    <footer className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <p className="inline-flex items-center mr-3 text-sm ">
          <UserPhotoIcon />
          {comment.email}
        </p>
      </div>
    </footer>
    <p className="text-lg ">{comment.name}</p>
    <p className="text-gray-800 ">{comment.body}</p>
  </article>
)

export default CommentCard
