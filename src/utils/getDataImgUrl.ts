import { RIOT_DATA_VERSIONS } from '@/constant';

const RIOT_DATA_HOST = 'https://ddragon.leagueoflegends.com';

export function championImgUrl(type: 'splash' | 'loading' | 'square', champName: string) {
  if (type === 'square') {
    return `${RIOT_DATA_HOST}/cdn/${RIOT_DATA_VERSIONS}/img/champion/${champName}.png`;
  } else {
    return `${RIOT_DATA_HOST}/cdn/img/champion/${type}/${champName}.jpg`;
  }
}

export function summonerProfileIconUrl(profileIconId: number) {
  return `${RIOT_DATA_HOST}/cdn/${RIOT_DATA_VERSIONS}/img/profileicon/${profileIconId}.png`;
}

export function championSkillImgUrl(type: 'passive' | 'spell', imgName: string) {
  return `${RIOT_DATA_HOST}/cdn/${RIOT_DATA_VERSIONS}/img/${type}/${imgName}`;
}

export function itemImgUrl(itemId: number) {
  return `${RIOT_DATA_HOST}/cdn/${RIOT_DATA_VERSIONS}/img/item/${itemId}.png`;
}

export function SummonerSpellImgUrl(spellName: string) {
  return `${RIOT_DATA_HOST}/cdn/${RIOT_DATA_VERSIONS}/img/spell/${spellName}.png`;
}

export function runesImgUrl(endPoint: string) {
  if (!endPoint) return;
  return `${RIOT_DATA_HOST}/cdn/img/${endPoint}`;
}
