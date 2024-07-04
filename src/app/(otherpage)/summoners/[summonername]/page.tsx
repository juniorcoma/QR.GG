import BackButton from '@/components/BackButton';
import GameRecordContainer from '@/components/GameRecordContainer';
import SummonerProfile from '@/components/SummonerProfile';
import SummonerRank from '@/components/SummonerRank';
import { client } from '@/service/axios';
import { accountType } from '@/types/api';

export default async function SummonerPage({ params }: { params: { summonername: string } }) {
  const decodedStr = decodeURIComponent(params.summonername);
  const summonerArray = decodedStr.split('-');
  const responseRiot = await getSummoner({ summonername: summonerArray[0], tagLine: summonerArray[1] });
  console.log(responseRiot);
  return (
    <>
      <div className="mb-16">
        <BackButton />
      </div>
      <section className="pb-9">
        <SummonerProfile
          profileImgId={responseRiot.profileIconId}
          summonerLevel={responseRiot.summonerLevel}
          summonername={summonerArray[0]}
          tagLine={summonerArray[1]}
        />
      </section>
      <section className="pb-9">
        <SummonerRank summonerId={responseRiot.id} />
      </section>
      <section>
        <GameRecordContainer puuid={responseRiot.puuid} />
      </section>
    </>
  );
}

const getSummoner = async ({ summonername, tagLine }: { summonername: string; tagLine: string }) => {
  const { data }: { data: accountType } = await client.get(`/riot/account/${summonername}/${tagLine}`);
  const summonerInfo = await client.get(`/riot/summoner/${data.puuid}`);
  return summonerInfo.data;
};
