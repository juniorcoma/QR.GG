import { NavbarProps } from '@/types';

export default function RankIcon({ isActive }: NavbarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      version="1.1"
      width="32"
      height="32"
      viewBox="0 0 28 28"
    >
      <defs>
        <clipPath id="master_svg0_55_8187">
          <rect x="0" y="0" width="28" height="28" rx="0" />
        </clipPath>
      </defs>
      <g clip-path="url(#master_svg0_55_8187)">
        <g>
          <path
            d="M2.3333740234375,15.1667L9.3333740234375,15.1667L9.3333740234375,24.5L2.3333740234375,24.5L2.3333740234375,15.1667ZM10.5000440234375,3.5L17.5000740234375,3.5L17.5000740234375,24.5L10.5000440234375,24.5L10.5000440234375,3.5ZM18.6666740234375,9.33333L25.6666740234375,9.33333L25.6666740234375,24.5L18.6666740234375,24.5L18.6666740234375,9.33333Z"
            fill={isActive ? '#424242' : '#CDCDCD'}
            fill-opacity="1"
          />
        </g>
      </g>
    </svg>
  );
}
