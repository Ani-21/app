export default async function getAllUsers() {
  const res = await fetch('http://localhost:8080/api/users')

  if (!res.ok) throw new Error('Failed to fetch')

  return res.json()
}
