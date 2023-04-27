'use client'

import { useState, useEffect } from 'react'

import getUser from 'lib/getUser'
import getUserPosts from 'lib/getUserPosts'
import Posts from '@src/components/Posts'
import UserDetailsCard from '@src/components/cards/UserDetails'
import BackArrowLink from '@src/components/BackArrowLink'
import Spinner from '@src/components/Spinner'

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

  if (!user) return <Spinner />

  return (
    <article
      className="max-w-sm rounded-lg overflow-hidden my-4"
      key={user?.id}
    >
      <BackArrowLink link="users" />
      <UserDetailsCard
        name={user.name}
        website={user.website}
        company={user.company.name}
        city={user.address.city}
        email={user.name}
      />
      <Posts postsList={userPosts} />
    </article>
  )
}

export default User
