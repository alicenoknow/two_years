import { Welcome, WelcomeButton } from '@/components'


export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll no-scrollbar">
      <Welcome />
      <WelcomeButton />
    </main>
  )
}

