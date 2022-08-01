import { Gender, BodyColors } from '@eternaltwin/labrute-core/types';
import React from 'react';

interface UpperRightArmProps {
  id: number;
  gender: Gender;
  colors: BodyColors;
  type: number;
}

const UpperRightArm = ({ id, gender, colors, type }: UpperRightArmProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="30.75" transform="matrix(0.8932, 0.446, -0.446, 0.8932, 18.8747, 67.2231)" width="40.3" xlinkHref={`#${id}-upperRightArm`} />
            <defs>
              <g id={`${id}-upperRightArm`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
                <use height="30.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.25, -15.5)" width="40.3" xlinkHref={`#${id}-upperRightArm-sprite13`} />
              </g>
              <g id={`${id}-upperRightArm-sprite13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
                <use height="30.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#${id}-upperRightArm-sprite14`} />
              </g>
              <g id={`${id}-upperRightArm-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
                <use height="28.0" transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#${id}-upperRightArm-sprite15`} />
                <use height="30.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#${id}-upperRightArm-sprite16`} />
              </g>
              <g id={`${id}-upperRightArm-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
                <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#${id}-upperRightArm-shape4`} />
              </g>
              <g id={`${id}-upperRightArm-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
                <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
                <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
                <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-4.0 26.55 Q-4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
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
          <use height="30.4" transform="matrix(0.7058, 0.6902, -0.6902, 0.7058, 31.4815, 78.4003)" width="20.05" xlinkHref={`#${id}-upperRightArm`} />
          <defs>
            <g id={`${id}-upperRightArm`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.05, 15.25)">
              <use height="30.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.05, -15.25)" width="20.05" xlinkHref={`#${id}-upperRightArm-sprite13`} />
            </g>
            <g id={`${id}-upperRightArm-sprite13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.05, 15.25)">
              <use height="30.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.05, -15.25)" width="20.05" xlinkHref={`#${id}-upperRightArm-sprite14`} />
            </g>
            <g id={`${id}-upperRightArm-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.05, 15.25)">
              <use height="28.0" transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#${id}-upperRightArm-sprite15`} />
              <use height="0.0" transform="matrix(1.0, 0.0, 0.0, 1.0, 0.3, 3.3)" width="0.0" xlinkHref={`#${id}-upperRightArm-sprite16`} />
            </g>
            <g id={`${id}-upperRightArm-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
              <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#${id}-upperRightArm-shape7`} />
            </g>
            <g id={`${id}-upperRightArm-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
              <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
              <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
              <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-4.0 26.55 Q-4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default UpperRightArm;
