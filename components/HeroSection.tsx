'use client'

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import posts from "../content/posts"
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/next'

export default function HeroSection() {

  const latestArticles = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const popularArticles = latestArticles.slice(0, 3);

  return (
    <div className="w-full">
      <div className="flex items-stretch justify-between space-x-6">
        {/* ✅ 왼쪽 슬라이드 카드 */}
        <div className="w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg h-[450px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {/* 🔥 최신 5개 포스트를 슬라이드로 출력 */}
            {latestArticles.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 w-full h-full">
                  {/* ✅ 왼쪽 텍스트 (흰색 배경) */}
                  <div className="bg-white dark:bg-[#121212] dark:text-white p-8 flex flex-col justify-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <h2 className="text-3xl font-bold text-black dark:text-white mt-1">
                      {article.title}
                    </h2>
                    <div className="mt-6">
                      <a href={`/blog/${article.slug}`} className="text-black dark:text-white font-medium flex items-center">
                        &gt; 지금 읽어보기
                      </a>
                    </div>
                  </div>

                  {/* ✅ 오른쪽 이미지 (아티클 썸네일) */}
                  <div className="bg-gray-300 relative w-full h-full">
                    <Image
                      src={article.image || "/default-thumbnail.jpg"} // 이미지가 없을 경우 기본 이미지 추가
                      alt={article.title}
                      width={600}
                      height={450}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Analytics />
        </div>

        {/* ✅ 우측 CTA 박스 (너비 28%) */}
        <div className="w-[28%] flex flex-col space-y-4 justify-between">
          {/* 파란색 박스 */}
          <Link className="block h-[48%]" href="https://creators.spotify.com/pod/show/6qurtkqt2n8" target="_blank" rel="noopener noreferrer">
            <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-[#191414] hover:text-[#1DB954] transition h-full cursor-pointer">
              <h3 className="text-lg font-bold">팟캐스트 듣자</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm">자세히 보기</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* 빨간색 박스 */}
          <Link className="block h-[48%]" href="https://maily.so/startupinsideout" target="_blank" rel="noopener noreferrer">
            <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-[#191414] hover:text-[#E53935] transition h-full">
              <h3 className="text-lg font-bold">뉴스레터 읽자</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm">더 알아보기</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
          <Analytics />
        </div>
      </div>
      <div className="w-full mx-auto my-8">
        {/* ✅ "인기 아티클" 섹션 제목 */}
        <h2 className="text-2xl font-bold mb-6 text-center">가장 인기 있는 아티클</h2>


        <div className="flex flex-col gap-4">
          {popularArticles.map((article, index) => (
            <Link href={`/blog/${article.slug}`} key={index}>
              <div className="bg-white dark:bg-[#191414] p-6 rounded-2xl shadow-md flex justify-between items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#222] transition">
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500 dark:text-gray-400">ARTICLE</p>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{article.title}</h3>
                </div>
                <div className="flex items-center gap-3 min-w-[160px] justify-between">

                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{article.author}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{article.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <Analytics />
        </div>
      </div>
    </div>
  )
}
