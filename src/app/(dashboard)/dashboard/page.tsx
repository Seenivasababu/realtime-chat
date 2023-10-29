'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
   const {data:session} = useSession()
  return (
    <div>Dashboard
      {JSON.stringify(session)}
    </div>
  )
}

export default Dashboard