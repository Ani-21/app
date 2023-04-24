export default async function getComments(postId: string) {
  const res = await fetch(`http://localhost:8080/api/posts/${postId}/comments`)

  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}
