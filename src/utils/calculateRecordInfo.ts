import { useQueryClient } from '@tanstack/react-query';
import { itemImgUrl, runesImgUrl, SummonerSpellImgUrl } from './getDataImgUrl';

export function calculateGameDuration(time: number) {
  const second = time % 60;
  const minute = (time - second) / 60;
  return `${minute}분 ${second}초`;
}

export function calculateGameCreation(time: number) {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const secondGap = nowSeconds - Math.floor(time / 1000);
  if (secondGap < 60) return `${secondGap}초 전`;
  else if (secondGap < 3600) return `${Math.round(secondGap / 60)}분 전`;
  else if (secondGap < 86400) return `${Math.round(secondGap / 3600)}시간 전`;
  else if (secondGap < 2592000) return `${Math.round(secondGap / 86400)}일 전`;
  else if (secondGap < 31557600) return `${Math.round(secondGap / 2592000)}달 전`;
  else return `${Math.floor(secondGap / 31557600)}년 전`;
}

export function summonerSpellImgUrlList(spell1Id: number, spell2Id: number) {
  const queryClient = useQueryClient();
  const data: any = queryClient.getQueryData(['summonerSpell']);
  const spellList = [spell1Id, spell2Id].map((spell: number) => {
    const spellData: any = data?.find((item: any) => item.key === spell.toString());
    const spellName = spellData?.id;
    return SummonerSpellImgUrl(spellName);
  });
  return spellList;
}

export function runImgUrlList(runData: {
  mainRun: { runTypeId: number; subId: number };
  subRun: { runTypeId: number };
}) {
  const queryClient = useQueryClient();
  const data: any = queryClient.getQueryData(['runes']);

  return [...Object.values(runData)].map((run: any, i: number) => {
    if (i === 0) {
      const mainRun = data.find((item: any) => item.id === run.runTypeId);
      const endPoint = mainRun.slots[0].runes.find((item: any) => run.subId === item.id).icon;
      return runesImgUrl(endPoint);
    } else {
      const mainRun = data.find((item: any) => item.id === run.runTypeId);
      return runesImgUrl(mainRun.icon);
    }
  });
}

export function summonerItemImgUrlList(itemIdList: any) {
  const itemListArr = [...itemIdList];
  return itemListArr.map((itemId: number) => {
    if (!itemId) {
      return null;
    } else {
      return itemImgUrl(itemId);
    }
  });
}
