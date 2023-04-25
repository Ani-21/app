'use client'

import { useState, useEffect } from 'react'

import getUser from 'lib/getUser'
import getUserPosts from 'lib/getUserPosts'
import Link from 'next/link'
import Posts from '@src/components/Posts'
import LocationIcon from '@src/components/icons/Location'
import MailIcon from '@src/components/icons/Mail'
import TeamIcon from '@src/components/icons/Team'

type Params = {
  params: {
    userId: string
  }
}
const User = ({ params: { userId } }: Params) => {
  const [user, setUser] = useState<User>(null)
  const [userPosts, setUserPosts] = useState<Post[]>(null)

  const fetchData = async () => {
    const [userData, userPostsData] = await Promise.all([
      getUser(userId),
      getUserPosts(userId),
    ])
    setUser(userData)
    setUserPosts(userPostsData)
  }

  useEffect(() => {
    fetchData()
  }, [userId])

  if (!user) return <p>Loading ... </p>

  return (
    <article
      className="max-w-sm rounded-lg overflow-hidden my-4"
      key={user?.id}
    >
      <Link href="/users">Back to users</Link>
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">{user.name}</h1>
        <p className="py-2 text-lg text-gray-700">{user.website}</p>
        <div className="flex items-center mt-4 text-gray-700">
          <TeamIcon />
          <h1 className="px-2 text-sm">{user.company.name}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <LocationIcon />
          <h1 className="px-2 text-sm">{user.address.city}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <MailIcon />
          <h1 className="px-2 text-sm">{user.email}</h1>
        </div>
      </div>

      <Posts postsList={userPosts} />
    </article>
  )
}

export default User
