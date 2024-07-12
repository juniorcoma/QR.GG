export const API_RIOT = Object.freeze({
  ACCOUNT: '/riot/account',
  SUMMONER_LEAGUE: '/riot/league',
  GAMEID_LIST: '/riot/match/list',
  GAME_INFO: '/riot/match/detail',
  SUMMONER_INFO: '/riot/summoner',
});

export const API = Object.freeze({
  OAUTH: '/aouth',
  REQUEST_RIOT: '/riot',
  USER: '/users',
});

export const API_RIOT_1 = Object.freeze({
  ACCOUNT: `${API.REQUEST_RIOT}/account`,
  SUMMONER_LEAGUE: `${API.REQUEST_RIOT}/league`,
  GAMEID_LIST: `${API.REQUEST_RIOT}/match/list`,
  GAME_DETAIL_INFO: `${API.REQUEST_RIOT}/match/detail`,
  SUMMONER_INFO: `${API.REQUEST_RIOT}/summoner`,
  CHAMPION_MASTERY: `${API.REQUEST_RIOT}/champion-mastery`,
  SUMMONER_RANK: `${API.REQUEST_RIOT}/league`,
});

export const API_DATA_DRAGON = Object.freeze({
  VERSIONS: '/api/versions.json',
  CHAMPIONS: '/data/ko_KR/champion.json',
  DETAIL_CHAMPION: '/data/ko_KR/champion',
  ITEM: '/data/ko_KR/item.json',
  SUMMONER_SPELL: '/data/ko_KR/summoner.json',
  RUNES: '/data/ko_KR/runesReforged.json',
});
