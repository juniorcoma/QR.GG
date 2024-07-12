import ArrowDownIcon from '@/assets/icons/ArrowDownIcon';
import { useState } from 'react';

interface SummonerRecordCardProps {
  children: React.ReactNode;
  isWin: boolean;
}

export default function SummonerRecordCard({ children, isWin }: SummonerRecordCardProps) {
  const [dropState, setDropState] = useState(false);

  const handleClick = () => {
    setDropState(prev => !prev);
  };
  return (
    <div className={`${isWin ? 'bg-color-game-item-01' : 'bg-color-game-item-03'} flex rounded-md`}>
      <div className={`record-card-deco ${isWin ? 'bg-[#5383e8]' : 'bg-[#E84057]'}`} />
      <div className="record-card-content-wrap">
        <div className="px-5 flex gap-3">{children}</div>
      </div>
      <div className="card-action">
        <button
          onClick={handleClick}
          type="button"
          className={`svg-button ${isWin ? 'bg-[#2F436E]' : 'bg-[#703C47]'} ${dropState && 'active'} `}
        >
          <span className="svg-icon">
            <ArrowDownIcon isWin={isWin} />
          </span>
        </button>
      </div>
    </div>
  );
}
