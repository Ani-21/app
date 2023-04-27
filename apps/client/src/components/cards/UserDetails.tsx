import LocationIcon from '../icons/Location'
import MailIcon from '../icons/Mail'
import TeamIcon from '../icons/Team'

type UserDetailsCardProps = {
  name: string
  website: string
  company: string
  city: string
  email: string
}

const UserDetailsCard = ({
  name,
  website,
  company,
  city,
  email,
}: UserDetailsCardProps) => (
  <div className="py-4 px-6">
    <h1 className="text-2xl font-semibold">{name}</h1>
    <p className="py-2 text-lg">{website}</p>
    <div className="flex items-center mt-4">
      <TeamIcon />
      <h1 className="px-2 text-sm">{company}</h1>
    </div>
    <div className="flex items-center mt-4">
      <LocationIcon />
      <h1 className="px-2 text-sm">{city}</h1>
    </div>
    <div className="flex items-center mt-4">
      <MailIcon />
      <h1 className="px-2 text-sm">{email}</h1>
    </div>
  </div>
)

export default UserDetailsCard
