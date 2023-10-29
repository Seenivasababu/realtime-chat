'use client'
import Button from '@/components/ui/Button'
import { db } from '@/lib/db'
import { signOut, signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {

  const {data:session,status} = useSession()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Hello</Button>
      <h1>Welcome to Auth</h1>
     
      {status === 'authenticated' && (
        <button onClick={() => signOut()}>Sign out</button>
      )}
      {status === 'unauthenticated' && (
        <button onClick={() => signIn('google')}>Sign in</button>
      )}
    </main>
  )
}
