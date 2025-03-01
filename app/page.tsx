import HeroSection from "components/HeroSection"
import Image from 'next/image'
import { BlogPosts } from 'components/posts'

export default function Page() {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-screen-lg px-8 lg:px-16 min-h-screen">
        <section className="w-full ">
          <HeroSection />
          <section className='w-full my-12'>
            
          </section>
        </section>



        <BlogPosts />
      </div>
    </section>
  )
}
