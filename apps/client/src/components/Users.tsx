import UserCard from './cards/User'

type UsersProps = {
  usersData: User[]
}

const Users = ({ usersData }: UsersProps) => (
  <section className="py-8 lg:py-16">
    <div className="flow-root">
      <ul className="divide-y divide-gray-200">
        {usersData.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  </section>
)

export default Users
