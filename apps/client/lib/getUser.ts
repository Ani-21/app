export default async function getPost(userId: string) {
  const res = await fetch(`http://localhost:8080/api/users/${userId}`)

  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}
