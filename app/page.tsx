import HeroSection from "components/HeroSection"
import { Analytics } from "@vercel/analytics/react"

export default function Page() {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-screen-lg min-h-screen">
        <section>
          <HeroSection />
          <Analytics />
          <section className='w-full my-12'>

          </section>
        </section>
      </div>
    </section>
  )
}
