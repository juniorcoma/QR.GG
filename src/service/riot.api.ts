import { API_RIOT_1 } from '@/constant/api';
import { client } from './axios';
import requestDelay from '@/utils/requestDelay';

export const riot_request = Object.freeze({
  getSummonerInfo: async (riotName: string, riotTag: string) => {
    const userRiotData = await riot_request.getRiotUserPuuid(riotName, riotTag);
    const { data: detailData } = await client(`${API_RIOT_1.SUMMONER_INFO}/${userRiotData.puuid}`);
    return { ...userRiotData, ...detailData };
  },
  getRiotUserPuuid: async (riotName: string, riotTage: string) => {
    const { data } = await client(`${API_RIOT_1.ACCOUNT}/${riotName}/${riotTage}`);
    return data;
  },
  getSummonerChampionMastery: async (puuid: string) => {
    const { data } = await client(`${API_RIOT_1.CHAMPION_MASTERY}/${puuid}`);
    return data;
  },
  getSummonerRank: async (summonerId: string) => {
    const { data } = await client.get(`${API_RIOT_1.SUMMONER_RANK}/${summonerId}`);
    const 자유랭크 = data.find((rank: any) => rank.queueType === 'RANKED_FLEX_SR');
    const 솔로랭크 = data.find((rank: any) => rank.queueType === 'RANKED_SOLO_5x5');
    return [솔로랭크, 자유랭크];
  },
  getSummonerGameDetail: async ({ pageParam = 0, puuid }: { pageParam: number; puuid: string }) => {
    const { data: gameIdList } = await client.get(`${API_RIOT_1.GAMEID_LIST}/${puuid}?start=${pageParam * 20}`);

    const gameDetailInfoList = [];

    for (const id of gameIdList) {
      const { data: gameData } = await client.get(`${API_RIOT_1.GAME_DETAIL_INFO}/${id}`);
      gameDetailInfoList.push(gameData);
    }

    return gameDetailInfoList;
  },
});
