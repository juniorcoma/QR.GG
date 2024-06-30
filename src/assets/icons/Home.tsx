import { NavbarProps } from '@/types';

export default function HomeIcon({ isActive }: NavbarProps) {
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
        <clipPath id="master_svg0_55_8199">
          <rect x="0" y="0" width="28" height="28" rx="0" />
        </clipPath>
      </defs>
      <g clip-path="url(#master_svg0_55_8199)">
        <g>
          <path
            d="M23.333448046875,23.333304296875C23.333448046875,23.977604296875,22.811048046875,24.500004296875,22.166748046875,24.500004296875L5.833418046875,24.500004296875C5.189078046875,24.500004296875,4.666748046875,23.977604296875,4.666748046875,23.333304296875L4.666748046875,12.833304296875L1.166748046875,12.833304296875L13.214948046875,1.880654296875C13.660048046875,1.475654296875,14.340148046875,1.475654296875,14.785248046875,1.880654296875L26.833448046875,12.833304296875L23.333448046875,12.833304296875L23.333448046875,23.333304296875Z"
            fill={isActive ? '#424242' : '#CDCDCD'}
            fill-opacity="1"
          />
        </g>
      </g>
    </svg>
  );
}
