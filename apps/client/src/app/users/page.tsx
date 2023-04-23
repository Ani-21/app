import getAllUsers from 'lib/getAllUsers'
import Link from 'next/link'

const UsersPage = async () => {
  const users: Promise<User[]> = getAllUsers()

  const usersData = await users
  return (
    <section>
      <p>
        <Link href="/">Back to Home Page</Link>
      </p>
      <br />
      {usersData.map(user => (
        <h3 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h3>
      ))}
    </section>
  )
}

export default UsersPage
