import { API_DATA_DRAGON } from '@/constant/api';
import { dataDragon } from './axios';

export const dragon_request = Object.freeze({
  getDataVersions: async () => {
    const { data } = await dataDragon.get(`${API_DATA_DRAGON.VERSIONS}`);
    return data[0];
  },
  getChampions: async (parsingType: 'values' | 'entries' | 'key') => {
    const versions = await dragon_request.getDataVersions();
    const { data } = await dataDragon(`/cdn/${versions}${API_DATA_DRAGON.CHAMPIONS}`);
    switch (parsingType) {
      case 'entries':
        return Object.entries(data.data);
      case 'key':
        return Object.keys(data.data);
      case 'values':
        return Object.values(data.data);
    }
  },
  getDetailChampion: async (name: string) => {
    const versions = await dragon_request.getDataVersions();
    const { data } = await dataDragon.get(`/cdn/${versions}/${API_DATA_DRAGON.DETAIL_CHAMPION}/${name}.json`);
    return data;
  },
  getItemInfo: async () => {
    const versions = await dragon_request.getDataVersions();
    const { data } = await dataDragon.get(`/cdn/${versions}/${API_DATA_DRAGON.ITEM}`);
    return data;
  },
  getSummonerSpell: async () => {
    const versions = await dragon_request.getDataVersions();
    const { data } = await dataDragon.get(`/cdn/${versions}${API_DATA_DRAGON.SUMMONER_SPELL}`);
    return Object.values(data.data);
  },
  getRunes: async () => {
    const versions = await dragon_request.getDataVersions();
    const { data } = await dataDragon.get(`/cdn/${versions}${API_DATA_DRAGON.RUNES}`);
    return data;
  },
});
