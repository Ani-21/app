'use client'

import { useState, useEffect } from 'react'

import getAllUsers from 'lib/getAllUsers'
import Users from 'src/components/Users'
import BackArrowLink from '@src/components/BackArrowLink'
import Spinner from '@src/components/Spinner'

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>(null)

  const fetchData = async () => {
    const usersData = await Promise.resolve(getAllUsers())
    setUsers(usersData)
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (!users) return <Spinner />

  return (
    <section>
      <BackArrowLink link="/" />
      <Users usersData={users} />
    </section>
  )
}

export default UsersPage
