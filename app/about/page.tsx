export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-8 lg:px-16">
      <div className="w-full max-w-screen-lg text-center">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          우리는 IT 및 기술 관련 인사이트를 제공하는 <strong>B급보고</strong>입니다.  
          IT 시장, 서비스 기획, UX 리서치 등 다양한 주제를 다룹니다.
        </p>
        <div className="mt-6">
          <a href="/" className="text-blue-500 hover:underline">
            홈으로 돌아가기 →
          </a>
        </div>
      </div>
    </div>
  );
}
