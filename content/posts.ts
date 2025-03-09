import subscirption_main from '../notion-data/1b04dcb9-65aa-8006-bb12-eafbf72977df.json'
import subscirption_junmai from '../notion-data/1b04dcb9-65aa-80b0-85f4-ca93ed34362a.json'
import subscirption_alenYang from '../notion-data/1b04dcb9-65aa-80a0-8797-f3bd6903430e.json'
import subscirption_uniLee from '../notion-data/1b04dcb9-65aa-80c7-ac51-fdd1e3e4b2ff.json'


const posts = [
  {
    title: "숨참구독-다이브",
    slug: "subscription-economy-main",
    content: subscirption_main,
    date: "2025-03-07",
    description: "",
    image: undefined,
    author: "자양"
  },
  {
    title: "글로벌 기업에 매달 꼬박꼬박 10만원씩 월세를 냅니다.",
    slug: "subscription-economy-junmai",
    content: subscirption_junmai,
    date: "2025-03-07",
    description: "",
    image: undefined,
    author: "준마이"
  },
  {
    title: "구독 in 글로벌",
    slug: "subscription-economy-alenYang",
    content: subscirption_alenYang,
    date: "2025-03-07",
    description: "",
    image: undefined,
    author: "알랜양"
  },
  {
    title: "물류가 있어야 비즈니스가 굴러간다",
    slug: "subscription-economy-uniLee",
    content: subscirption_uniLee,
    date: "2025-03-07",
    description: "",
    image: undefined,
    author: "우니리"
  }
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
  author: string;
};
