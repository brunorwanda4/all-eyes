import HeroUser from '@/components/hero'
import PopularNews from '@/components/news/popular-news'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroUser/>
      <PopularNews/>
    </main>
  )
}
