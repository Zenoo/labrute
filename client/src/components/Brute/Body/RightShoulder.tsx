import { Gender, BodyColors } from '@eternaltwin/labrute-core/types';
import React from 'react';

interface RightShoulderProps {
  id: string;
  gender: Gender;
  colors: BodyColors;
  type: number;
}

const RightShoulder = ({ id, gender, colors, type }: RightShoulderProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="44.75" transform="matrix(0.8932, 0.446, -0.446, 0.8932, 14.6223, 47.2702)" width="45.25" xlinkHref={`#${id}-rightShoulder`} />
            <defs>
              <g id={`${id}-rightShoulder`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
                <use height="44.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -30.15, -20.3)" width="45.25" xlinkHref={`#${id}-rightShoulder-sprite18`} />
              </g>
              <g id={`${id}-rightShoulder-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
                <use height="37.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#${id}-rightShoulder-sprite19`} />
              </g>
              <g id={`${id}-rightShoulder-sprite19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
                <use height="37.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#${id}-rightShoulder-sprite20`} />
              </g>
              <g id={`${id}-rightShoulder-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
                <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#${id}-rightShoulder-sprite21`} />
                <use height="22.3" transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#${id}-rightShoulder-sprite22`} />
              </g>
              <g id={`${id}-rightShoulder-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
                <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#${id}-rightShoulder-shape5`} />
              </g>
              <g id={`${id}-rightShoulder-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
                <path d="M1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9 Q0.6 -7.15 0.7 -6.9 L0.95 -6.9 Q4.1 -6.6 5.85 -4.25 7.35 -2.15 6.9 1.2 6.55 3.6 4.95 5.2 L4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
                <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.85 2.5 -6.9 0.45 L-7.0 -1.2 Q-6.5 -3.55 -4.9 -5.15 -4.75 -5.55 -4.2 -5.75 -3.55 -6.4 -2.6 -6.55 -1.25 -7.25 0.4 -6.9" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
                <path d="M4.95 5.2 Q6.55 3.6 6.9 1.2 7.35 -2.15 5.85 -4.25 4.1 -6.6 0.95 -6.9 L0.7 -6.9 Q0.6 -7.15 0.4 -6.9 -1.25 -7.25 -2.6 -6.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
              </g>
            </defs>
          </>
        );
      default:
        return null;
    }
  }

  switch (type) {
    case 1:
      return (
        <>
          <use height="33.0" transform="matrix(0.6472, 0.5026, -0.5026, 0.6472, 29.4072, 63.2145)" width="33.0" xlinkHref={`#${id}-rightShoulder`} />
          <defs>
            <g id={`${id}-rightShoulder`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.3, 17.2)">
              <use height="33.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.3, -17.2)" width="33.0" xlinkHref={`#${id}-rightShoulder-sprite18`} />
            </g>
            <g id={`${id}-rightShoulder-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.3, 17.2)">
              <use height="33.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.3, -17.2)" width="33.0" xlinkHref={`#${id}-rightShoulder-sprite19`} />
            </g>
            <g id={`${id}-rightShoulder-sprite19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.3, 17.2)">
              <use height="33.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.3, -17.2)" width="33.0" xlinkHref={`#${id}-rightShoulder-sprite20`} />
            </g>
            <g id={`${id}-rightShoulder-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.3, 17.2)">
              <use height="14.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.95, -6.95)" width="13.8" xlinkHref={`#${id}-rightShoulder-sprite21`} />
              <use height="22.3" transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#${id}-rightShoulder-sprite22`} />
            </g>
            <g id={`${id}-rightShoulder-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.95, 6.95)">
              <use height="14.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.95, -6.95)" width="13.8" xlinkHref={`#${id}-rightShoulder-shape8`} />
            </g>
            <g id={`${id}-rightShoulder-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.95, 6.95)">
              <path d="M0.4 -6.9 Q2.15 -6.95 3.7 -5.9 L5.6 -4.1 Q6.35 -3.05 6.6 -1.7 L6.85 1.2 Q6.75 2.95 5.65 4.3 L4.95 5.2 4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
              <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.55 2.95 -6.8 1.45 -7.2 -0.5 -6.65 -2.3 -6.05 -4.2 -4.55 -5.45 L-3.45 -6.25 -2.8 -6.5 0.4 -6.9" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
              <path d="M4.95 5.2 L5.65 4.3 Q6.75 2.95 6.85 1.2 L6.6 -1.7 Q6.35 -3.05 5.6 -4.1 L3.7 -5.9 Q2.15 -6.95 0.4 -6.9 L-2.8 -6.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default RightShoulder;
