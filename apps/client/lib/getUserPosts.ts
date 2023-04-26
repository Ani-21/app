export default async function getUserPosts(userId: string) {
  const res = await fetch(`http://localhost:8080/api/users/${userId}/posts`)

  if (!res.ok) throw new Error('Failed to fetch')

  return res.json()
}

export async function getUserPostsLength(userId: string) {
  const res = await fetch(`http://localhost:8080/api/users/${userId}/posts`)
  if (!res.ok) throw new Error('Failed to fetch')
  const data = await res.json()
  return data.length
}
