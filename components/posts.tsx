'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import posts from '../content/posts'
import { Post } from '../content/posts'
import { Analytics } from '@vercel/analytics/next'

export function BlogPosts() {
  const postsByTopic = posts.reduce((acc, post) => {
    const topic = post.topic || "Uncategorized";
    if (!acc[topic]) acc[topic] = [];
    acc[topic].push(post);
    return acc;
  }, {} as Record<string, Post[]>);

  // 개별 토글 상태 관리
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});

  const toggleTopic = (topic: string) => {
    setOpenTopics((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
      {Object.keys(postsByTopic).map((topic) => {
        const firstPost = postsByTopic[topic]?.[0]; // 첫 번째 글 가져오기

        return (
          <div
            key={topic}
            className="p-4 rounded-2xl shadow-lg border border-gray-200 dark:border-[#121212] bg-white dark:bg-[#121212] transition-all duration-700 self-start"
          >
            {/* Topic 박스 (클릭 이벤트를 버튼 전체에 적용) */}
            <button
              onClick={() => toggleTopic(topic)}
              className="flex justify-between items-center w-full p-3 rounded-xl bg-[gray-100] dark:bg-[#1E1E1E] text-black font-extrabold dark:text-white font-medium border border-gray-300 dark:border-[#292929]"
            >
              <span className="flex-1 text-left ml-2">{topic}</span>
              <span
                className={`transition-transform duration-500 ${openTopics[topic] ? "rotate-180" : "rotate-0"
                  }`}
              >
                ▼
              </span>
              <Analytics />
            </button>

            {/* 주제별 글 목록 */}
            <div
              className={`grid gap-3 bg-gray-100 dark:bg-[#252525] rounded-xl p-2
                          transition-all duration-500 ease-in-out
                          ${openTopics[topic]
                  ? "max-h-[500px] opacity-100 pointer-events-auto mt-3"
                  : "max-h-0 opacity-0 pointer-events-none mt-0"
                } 
                          overflow-hidden`}
            >
              {postsByTopic[topic].map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-4 bg-gray-100 dark:bg-[#252525] rounded-lg border border-gray-100 dark:border-[#292929] hover:bg-gray-300 dark:hover:bg-[#191919] transition"
                >
                  <p className="text-gray-900 dark:text-white font-semibold">{post.title}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {post.date} · {post.author}
                  </p>
                  <Analytics />
                </Link>
              ))}
            </div>

            {/* "바로 읽어보기" 버튼 */}
            {firstPost && (
              <div
                className={`${openTopics[topic] ? "mt-2" : "mt-0"
                  } bg-[#1DB954] dark:bg-[#1DB954] p-2 font-bold rounded-lg text-center`}
              >
                <Link
                  href={`/blog/${firstPost.slug}`}
                  className="text-sm text-white dark:text-white hover:underline"
                >
                  오프닝 아티클 읽어보기
                </Link>
                <Analytics />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}