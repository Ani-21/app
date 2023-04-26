import React from 'react'
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
    <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
    <p className="py-2 text-lg text-gray-700">{website}</p>
    <div className="flex items-center mt-4 text-gray-700">
      <TeamIcon />
      <h1 className="px-2 text-sm">{company}</h1>
    </div>
    <div className="flex items-center mt-4 text-gray-700">
      <LocationIcon />
      <h1 className="px-2 text-sm">{city}</h1>
    </div>
    <div className="flex items-center mt-4 text-gray-700">
      <MailIcon />
      <h1 className="px-2 text-sm">{email}</h1>
    </div>
  </div>
)

export default UserDetailsCard
