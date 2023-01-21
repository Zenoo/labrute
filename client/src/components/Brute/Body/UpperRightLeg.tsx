import { Gender, BodyColors } from '@labrute/core';
import React from 'react';

interface UpperRightLegProps {
  id: string;
  gender: Gender;
  colors: BodyColors;
  type: number;
}

const UpperRightLeg = ({ id, gender, colors, type }: UpperRightLegProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="43.1" transform="matrix(0.991, 0.0774, -0.0774, 0.991, 6.7941, 107.5617)" width="31.35" xlinkHref={`#${id}-upperRightLeg`} />
            <defs>
              <g id={`${id}-upperRightLeg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.85, 2.25)">
                <use height="43.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.85, -2.25)" width="31.35" xlinkHref={`#${id}-upperRightLeg-sprite35`} />
              </g>
              <g id={`${id}-upperRightLeg-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.75, 18.65)">
                <use height="43.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.4" xlinkHref={`#${id}-upperRightLeg-sprite36`} />
              </g>
              <g id={`${id}-upperRightLeg-sprite36`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.4, 18.65)">
                <use height="37.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#${id}-upperRightLeg-sprite37`} />
                <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#${id}-upperRightLeg-sprite38`} />
                <use height="43.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.05" xlinkHref={`#${id}-upperRightLeg-sprite39`} />
              </g>
              <g id={`${id}-upperRightLeg-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
                <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#${id}-upperRightLeg-shape7`} />
              </g>
              <g id={`${id}-upperRightLeg-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
                <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#${id}-upperRightLeg-shape8`} />
              </g>
              <g id={`${id}-upperRightLeg-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
                <path d="M-0.6 15.15 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.5 10.9 6.2 12.6 3.85 14.25 -0.6 15.15" fill={colors.primary.shade} fillRule="evenodd" stroke="none" />
                <path d="M-0.6 15.15 Q-3.15 14.9 -4.9 14.0 -6.65 13.05 -7.6 10.95 -8.55 8.9 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.6 15.15" fill={colors.primary.color} fillRule="evenodd" stroke="none" />
                <path d="M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 L-8.0 3.75 Q-8.55 8.9 -7.6 10.95 -6.65 13.05 -4.9 14.0 -3.15 14.9 -0.6 15.15 3.85 14.25 6.2 12.6 8.5 10.9 9.0 7.6 L8.0 -13.35 6.9 -15.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
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
          <use height="43.45" transform="matrix(0.9833, 0.0212, -0.0212, 0.9833, 4.4817, 113.9417)" width="25.5" xlinkHref={`#${id}-upperRightLeg`} />
          <defs>
            <g id={`${id}-upperRightLeg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.6, 2.6)">
              <use height="43.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -16.6, -2.6)" width="25.5" xlinkHref={`#${id}-upperRightLeg-sprite35`} />
            </g>
            <g id={`${id}-upperRightLeg-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.5, 19.0)">
              <use height="43.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -16.5, -19.0)" width="25.5" xlinkHref={`#${id}-upperRightLeg-sprite36`} />
            </g>
            <g id={`${id}-upperRightLeg-sprite36`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.5, 19.0)">
              <use height="37.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.4, -18.65)" width="16.75" xlinkHref={`#${id}-upperRightLeg-sprite37`} />
              <use height="29.5" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.85, -18.65)" width="17.4" xlinkHref={`#${id}-upperRightLeg-sprite38`} />
              <use height="43.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -16.5, -19.0)" width="25.5" xlinkHref={`#${id}-upperRightLeg-sprite39`} />
            </g>
            <g id={`${id}-upperRightLeg-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.4, 18.65)">
              <use height="37.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.4, -18.65)" width="16.75" xlinkHref={`#${id}-upperRightLeg-shape11`} />
            </g>
            <g id={`${id}-upperRightLeg-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.4, 18.65)">
              <path d="M0.35 18.7 Q-0.8 11.7 -0.65 11.15 -0.1 3.65 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 Q8.95 -2.1 7.25 12.75 7.05 14.2 5.9 16.35 4.7 18.45 0.35 18.7" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
              <path d="M0.05 -18.6 L0.15 -5.25 Q-0.1 3.65 -0.65 11.15 -0.8 11.7 0.35 18.7 -4.1 17.8 -5.65 16.3 -7.25 14.75 -7.3 12.05 -9.05 0.05 -8.0 -13.5 -7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
              <path d="M5.9 16.35 Q7.05 14.2 7.25 12.75 8.95 -2.1 8.0 -13.35 L6.9 -15.65 M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 -9.05 0.05 -7.3 12.05 -7.25 14.75 -5.65 16.3" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
            <g id={`${id}-upperRightLeg-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.85, 18.65)">
              <use height="29.5" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.85, -18.65)" width="17.4" xlinkHref={`#${id}-upperRightLeg-shape12`} />
            </g>
            <g id={`${id}-upperRightLeg-shape12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.85, 18.65)">
              <path d="M0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 Q8.55 -8.55 8.55 -3.7 L8.55 -1.6 8.45 -1.6 7.8 5.8 Q7.75 8.15 5.85 9.6 3.9 11.05 -0.5 10.8 L-0.55 9.25 -0.3 3.7 0.0 -2.4 0.05 -4.5 0.15 -4.5 0.15 -5.25 0.05 -18.6 M8.55 -3.7 L8.45 -1.6 8.55 -3.7" fill={colors.primary.shade} fillRule="evenodd" stroke="none" />
              <path d="M0.05 -18.6 L0.15 -5.25 0.15 -4.5 0.05 -4.5 0.0 -2.4 -0.3 3.7 -0.55 9.25 -0.5 10.8 Q-3.0 10.45 -4.85 9.55 -6.75 8.65 -7.7 7.2 -8.65 5.75 -8.6 1.8 L-8.6 1.7 -8.85 -3.25 -8.85 -4.3 -8.85 -3.25 -8.85 -4.3 -8.85 -5.35 -8.8 -5.35 -8.65 -7.9 -8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill={colors.primary.color} fillRule="evenodd" stroke="none" />
              <path d="M-0.5 10.8 Q3.9 11.05 5.85 9.6 7.75 8.15 7.8 5.8 L8.45 -1.6 8.55 -3.7 Q8.55 -8.55 8.0 -13.35 M-8.0 -13.5 L-8.65 -7.9 -8.8 -5.35 M-8.85 -5.35 L-8.85 -4.3 -8.85 -3.25 -8.6 1.7 -8.6 1.8 Q-8.65 5.75 -7.7 7.2 -6.75 8.65 -4.85 9.55 -3.0 10.45 -0.5 10.8 M-8.85 -4.3 L-8.85 -3.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default UpperRightLeg;
