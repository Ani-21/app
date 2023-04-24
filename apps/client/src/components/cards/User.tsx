import Link from 'next/link'

type UserCardProps = {
  user: User
}

const UserCard = ({ user }: UserCardProps) => (
  <li className="py-3 sm:py-4">
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="w-8 h-8 rounded-full" alt="User" />
      </div>
      <div className="flex-1 min-w-0">
        <Link href={`/users/${user.id}`}>
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {user.name}
          </p>
        </Link>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {user.email}
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {user.company.name}
      </div>
    </div>
  </li>
)

export default UserCard
