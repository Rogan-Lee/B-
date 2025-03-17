
import { BlogPosts } from 'components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className='w-full max-w-screen-lg min-h-screen'>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">스타트업 인사이드 아웃</h1>
      <BlogPosts />
    </section>
  )
}
