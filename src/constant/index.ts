import MypageIcon from '@/assets/icons/Mypage';
import RankIcon from '@/assets/icons/Rank';
import SearchIcon from '@/assets/icons/Search';
import HomeIcon from '@/assets/icons/Home';

export const NAVBAR_RANDER_LIST = [
  {
    id: 1,
    icon: HomeIcon,
    text: '홈',
    link: '/',
  },
  {
    id: 2,
    icon: RankIcon,
    text: '랭킹',
    link: '/rank',
  },
  {
    id: 3,
    icon: SearchIcon,
    text: '챔피언 검색',
    link: '/champion-list',
  },
  {
    id: 4,
    icon: MypageIcon,
    text: '마이 페이지',
    link: '/profile',
  },
];
