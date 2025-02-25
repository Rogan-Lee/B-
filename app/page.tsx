import HeroSection from "components/HeroSection"
import Image from 'next/image'
import { BlogPosts } from 'components/posts'

export default function Page() {
  return (
    <section>
      <div className="w-full min-h-screen">
        <section className="w-full">
          <HeroSection />
        </section>

        {/* 네비게이션 아래 추가 섹션 */}


        <BlogPosts />
      </div>
    </section>
  )
}
