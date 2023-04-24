import getAllUsers from 'lib/getAllUsers'
import Link from 'next/link'
import Users from 'src/components/Users'

const UsersPage = async () => {
  const users: Promise<User[]> = getAllUsers()

  const usersData = await users
  return (
    <section>
      <p>
        <Link href="/">Back to Home Page</Link>
      </p>
      <br />
      <Users usersData={usersData} />
    </section>
  )
}

export default UsersPage
