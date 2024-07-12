import BackButton from '@/components/BackButton';

import SummonerProfile from '@/components/summonerRecord/SummonerProfile';
import SummonerRankContainer from '@/components/summonerRecord/SummonerRankContainer';
import SummonerRecordContainer from '@/components/summonerRecord/SummonerRecordContainer';

import { riot_request } from '@/service/riot.api';
import { Suspense } from 'react';

export default async function SummonerPage({ params }: { params: { summonername: string } }) {
  const decodedStr = decodeURIComponent(params.summonername);
  const [riotName, riotTag] = decodedStr.split('-');
  const { puuid, gameName, tagLine, id, accountId, profileIconId, summonerLevel } = await riot_request.getSummonerInfo(
    riotName,
    riotTag,
  );

  return (
    <>
      <div className="mb-12">
        <BackButton />
      </div>
      <section className="px-6 mb-12">
        <SummonerProfile
          profileIconId={profileIconId}
          summonerLevel={summonerLevel}
          gameName={gameName}
          tagLine={tagLine}
          puuid={puuid}
        />
      </section>
      <section className="mb-12">
        <SummonerRankContainer summonerId={id} />
      </section>

      <Suspense fallback={<div>Loding...</div>}>
        <SummonerRecordContainer puuid={puuid} />
      </Suspense>
    </>
  );
}
