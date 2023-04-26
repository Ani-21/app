import Link from 'next/link'
import UserPhotoIcon from '../icons/UserPhoto'

type UserCardProps = {
  user: User
}

const UserCard = ({ user }: UserCardProps) => (
  <li className="py-3 sm:py-4 cursor-pointer hover:bg-light">
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <UserPhotoIcon />
      </div>
      <div className="flex-1 min-w-0">
        <Link href={`/users/${user.id}`}>
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {user.username}
          </p>
        </Link>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {user.email}
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {}
      </div>
    </div>
  </li>
)

export default UserCard
