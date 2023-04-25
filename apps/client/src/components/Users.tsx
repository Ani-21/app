import UserCard from './cards/User'

type UsersProps = {
  usersData: User[]
}

const Users = ({ usersData }: UsersProps) => (
  <div className="flow-root">
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {usersData.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  </div>
)

export default Users
