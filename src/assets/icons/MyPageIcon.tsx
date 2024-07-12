import { GnbBarIconProps } from '@/types';

export default function MyPageIcon({ isActive }: GnbBarIconProps) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="material-symbols:bookmark">
        <path
          id="Vector"
          d="M10 42V10C10 8.9 10.392 7.95867 11.176 7.176C11.96 6.39333 12.9013 6.00133 14 6H34C35.1 6 36.042 6.392 36.826 7.176C37.61 7.96 38.0013 8.90133 38 10V42L24 36L10 42Z"
          fill={isActive ? '#fff' : '#9DA5B6'}
        />
      </g>
    </svg>
  );
}
