export default async function getAllPosts() {
  const res = await fetch('http://localhost:8080/api/posts')

  if (!res.ok) throw new Error('Failed to fetch')

  return res.json()
}
