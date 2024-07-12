interface ArrowDownIconProps {
  isWin: boolean;
}

export default function ArrowDownIcon({ isWin }: ArrowDownIconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.3135 16.9706L16.9703 22.6274L22.6272 16.9706"
        stroke={isWin ? '#5383E8' : '#E84057'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
