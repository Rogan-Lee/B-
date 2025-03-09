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
          <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-[#191414] hover:text-[#1DB954] transition h-[48%]">
            <h3 className="text-lg font-bold">팟캐스트 듣자</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm">자세히 보기</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* 빨간색 박스 */}
          <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-red-700 transition h-[48%]">
            <h3 className="text-lg font-bold">뉴스레터 읽자</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm">더 알아보기</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto my-8">
        {/* ✅ "인기 아티클" 섹션 제목 */}
        <h2 className="text-2xl font-bold mb-6 text-center">가장 인기 있는 아티클</h2>

        {/* ✅ 세로 리스트 스타일 적용 */}
        <div className="flex flex-col gap-4">
          {articles.slice(0, 3).map((article, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#191414] p-6 rounded-2xl shadow-md flex justify-between items-center"
            >
              {/* ✅ 본문 */}
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 dark:text-gray-400">ARTICLE</p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{article.title}</h3>
              </div>

              {/* ✅ 작성자 정보 */}
              <div className="flex items-center gap-3 min-w-[160px] justify-between">
                <Image
                  src={article.authorImage}
                  alt={article.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{article.author}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{article.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>





    </div>
  )
}


//더미 데이터
const articles = [
  {
    image: "/images/article-1.jpg",
    title: "숨참 구독 다이브",
    author: "자양",
    authorImage: "/images/author-1.jpg",
    date: "2025.03.04",
  },
  {
    image: "/images/article-2.jpg",
    title: "구독의 혜택과 ‘계산’의 딜레마",
    author: "준마이",
    authorImage: "/images/author-2.jpg",
    date: "2025.03.04",
  },
  {
    image: "/images/article-3.jpg",
    title: "UI, 비즈니스에 도움이 됩니까?",
    author: "준마이",
    authorImage: "/images/author-3.jpg",
    date: "2025.03.04",
  },

];
