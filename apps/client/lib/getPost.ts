export default async function getPost(postId: string) {
  const res = await fetch(`http://localhost:8080/api/posts/${postId}`)

  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}
