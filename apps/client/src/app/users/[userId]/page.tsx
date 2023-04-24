import getUser from 'lib/getUser'
import Link from 'next/link'

type Params = {
  params: {
    userId: string
  }
}
const User = async ({ params: { userId } }: Params) => {
  const user: Promise<User> = getUser(userId)

  const userData = await user

  return (
    <article key={userData.id}>
      <Link href="/users">Back to users</Link>
      <h3>{userData.name}</h3>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
    </article>
  )
}

export default User
