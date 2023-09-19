import AppHeader from "@/components/AppHeader"
import AppHero from "@/components/AppHero"
import DealList from "@/components/DealList"

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-sky-50 to-sky-100 flex min-h-screen flex-col items-center justify-between p-36">
      <div>
        <AppHeader />
        <AppHero />
        <DealList />
      </div>
    </main>
  )
}
