import { Welcome, WelcomeButton } from '@/components'

/**
 * todo
 * 3. prepare results
 * 4. prepare welcome
 * 5. final animation (on hover/click)
 * 6. croissant background animation
 *  
 */

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <Welcome />
      <WelcomeButton />
    </main>
  )
}
