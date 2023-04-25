'use client'

import { useState, useEffect } from 'react'

import getAllUsers from 'lib/getAllUsers'
import Link from 'next/link'
import Users from 'src/components/Users'

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>(null)

  const fetchData = async () => {
    const usersData = await Promise.resolve(getAllUsers())
    setUsers(usersData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!users) return <p>Loading ... </p>

  return (
    <section>
      <p>
        <Link href="/">Back to Home Page</Link>
      </p>
      <br />
      <Users usersData={users} />
    </section>
  )
}

export default UsersPage
