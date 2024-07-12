import ChampInfoIcon from '@/assets/icons/ChampInfoIcon';
import HomeIcon from '@/assets/icons/HomeIcon';
import ListIcon from '@/assets/icons/ListIcon';
import MyPageIcon from '@/assets/icons/MyPageIcon';
import RankIcon from '@/assets/icons/RankIcon';

export const NAVBAR_RANDER_LIST = [
  {
    id: 1,
    icon: HomeIcon,
    text: '홈',
    link: '/',
  },
  {
    id: 2,
    icon: ChampInfoIcon,
    text: '챔피언 정보',
    link: '/champion-list',
  },
  {
    id: 3,
    icon: ListIcon,
    text: '게시글 목록',
    link: '/talk-list',
  },
  {
    id: 4,
    icon: RankIcon,
    text: '랭킹',
    link: '/rank',
  },

  {
    id: 5,
    icon: MyPageIcon,
    text: '마이페이지',
    link: '/profile',
  },
];

export const RIOT_DATA_VERSIONS = '14.13.1';

export const ROMAN_TO_ARABIC_NUM = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
};

export const GAME_QUEUE_TYPE = {
  '400': '일반 드래프트',
  '420': '솔랭',
  '430': '일반',
  '440': '자랭',
  '450': '무작위 총력전',
  '1700': '아레나',
  '490': '빠른 대전',
};
