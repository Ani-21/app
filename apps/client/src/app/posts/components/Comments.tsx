type Props = {
  promise: Promise<Comment[]>
}
const Comments = async ({ promise }: Props) => {
  const comments = await promise

  return (
    <>
      <h4>Comments: </h4>
      <br />
      {comments.map(comment => (
        <article key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </article>
      ))}
    </>
  )
}

export default Comments
