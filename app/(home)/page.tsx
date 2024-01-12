import HeroUser from '@/components/hero'
import NewsUser from '@/components/news/news-user'
import PopularNews from '@/components/news/popular-news'

export default function Home() {
  return (
    <main>
      <HeroUser/>
      <PopularNews/>
      <NewsUser/>
    </main>
  )
}
