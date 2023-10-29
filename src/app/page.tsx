
import Button from '@/components/ui/Button'
import { db } from '@/lib/db'
import Image from 'next/image'

export default async function Home() {
  await db.set('hello','hello')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Hello</Button>
    </main>
  )
}
