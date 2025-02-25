'use client'

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="w-full">
      <div className="flex items-stretch justify-between space-x-6">
        {/* ✅ 왼쪽 슬라이드 카드 (너비 70%) */}
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
            {[0, 1, 2, 3, 4].map((index) => ( // ✅ 5개 슬라이드 고정
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 w-full h-full">
                  {/* ✅ 왼쪽 텍스트 (흰색 배경) */}
                  <div className="bg-white p-8 flex flex-col justify-center">
                    <span className="text-sm text-gray-500">아티클 제목입니다</span>
                    <h2 className="text-3xl font-bold text-black dark:text-white mt-1">
                      숨참 구독 다이브
          </h2>
                    <div className="mt-6">
                      <a href="#" className="text-black font-medium flex items-center">
                        &gt; 지금 읽어보기
            </a>
                    </div>
                  </div>

                  {/* ✅ 오른쪽 이미지 (회색 배경) */}
                  <div className="bg-gray-300 relative w-full h-full">
                    <Image
                      src={`/images/slide-${index + 1}.jpg`} // ✅ index+1만큼만 접근
                      alt={`슬라이드 이미지 ${index + 1}`}
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

        </div>

        {/* ✅ 우측 CTA 박스 (너비 28%) */}
        <div className="w-[28%] flex flex-col space-y-4 justify-between h-[450px]">
          {/* 파란색 박스 */}
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-blue-700 transition h-[48%]">
            <h3 className="text-lg font-bold">파란색 제목</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm">자세히 보기</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* 빨간색 박스 */}
          <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-red-700 transition h-[48%]">
            <h3 className="text-lg font-bold">빨간색 제목</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm">더 알아보기</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
