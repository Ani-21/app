export default async function postComment(postId: string, comment: string) {
  const res = await fetch(
    `http://localhost:8080/api/posts/${postId}/comments`,
    {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}
