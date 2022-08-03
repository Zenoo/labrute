import { BodyColors, Gender } from '@eternaltwin/labrute-core/types';
import React from 'react';

interface LowerLeftArmProps {
  id: string;
  gender: Gender;
  colors: BodyColors;
  type: number;
}

const LowerLeftArm = ({ id, gender, colors, type }: LowerLeftArmProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="62.85" transform="matrix(1.0, 0.0, 0.0, 1.0, 39.2, 83.1)" width="64.1" xlinkHref={`#${id}-lowerLeftArm`} />
            <defs>
              <g id={`${id}-lowerLeftArm`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
                <use height="62.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.1" xlinkHref={`#${id}-lowerLeftArm-sprite95`} />
              </g>
              <g id={`${id}-lowerLeftArm-sprite95`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
                <use height="62.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#${id}-lowerLeftArm-sprite96`} />
              </g>
              <g id={`${id}-lowerLeftArm-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
                <use height="28.0" transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref={`#${id}-lowerLeftArm-sprite5`} />
                <use height="62.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#${id}-lowerLeftArm-sprite97`} />
              </g>
              <g id={`${id}-lowerLeftArm-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
                <use height="33.65" transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#${id}-sprite7-lower-left-arm`} />
              </g>
              <g id={`${id}-sprite7-lower-left-arm`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
                <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#${id}-shape1-lower-left-arm`} />
              </g>
              <g id={`${id}-shape1-lower-left-arm`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
                <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill={colors.secondary.color} fillRule="evenodd" stroke="none" />
                <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill={colors.secondary.shade} fillRule="evenodd" stroke="none" />
                <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
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
          <use height="57.85" transform="matrix(0.5047, 0.8466, -0.8466, 0.5047, 67.955, 80.8241)" width="42.4" xlinkHref={`#${id}-lowerLeftArm`} />
          <defs>
            <g id={`${id}-lowerLeftArm`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.6, 29.0)">
              <use height="57.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.6, -29.0)" width="42.4" xlinkHref={`#${id}-lowerLeftArm-sprite94`} />
            </g>
            <g id={`${id}-lowerLeftArm-sprite94`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.6, 29.0)">
              <use height="57.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.6, -29.0)" width="42.4" xlinkHref={`#${id}-lowerLeftArm-sprite95`} />
            </g>
            <g id={`${id}-lowerLeftArm-sprite95`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.6, 29.0)">
              <use height="28.0" transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.6711, -14.6573)" width="12.0" xlinkHref={`#${id}-lowerLeftArm-sprite96`} />
              <use height="57.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.6, -29.0)" width="42.4" xlinkHref={`#${id}-lowerLeftArm-sprite97`} />
            </g>
            <g id={`${id}-lowerLeftArm-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.3, 1.45)">
              <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.3, -1.45)" width="12.0" xlinkHref={`#${id}-lowerLeftArm-shape28`} />
            </g>
            <g id={`${id}-lowerLeftArm-shape28`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.3, 1.45)">
              <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 -4.2 10.2 -6.3 6.75 L-5.4 5.15 -5.0 3.6 -4.95 3.55 -3.7 3.3 Q-1.8 3.3 -0.15 6.15 L0.1 6.6 0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
              <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 0.1 6.6 -0.15 6.15 Q-1.8 3.3 -3.7 3.3 L-4.95 3.55 -5.0 3.6 -4.8 2.95 -4.4 2.0 -4.4 1.9 -4.35 1.75 -3.9 0.55 Q-3.4 -1.05 -0.1 -1.45 1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
              <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 -4.2 10.2 -6.3 6.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
            <g id={`${id}-lowerLeftArm-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.15, 30.55)">
              <use height="33.65" transform="matrix(0.8944, -0.0586, 0.0396, 0.6048, -13.8145, -2.0958)" width="30.4" xlinkHref={`#${id}-sprite7-lower-left-arm`} />
            </g>
            <g id={`${id}-sprite7-lower-left-arm`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
              <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#${id}-shape1-lower-left-arm`} />
            </g>
            <g id={`${id}-shape1-lower-left-arm`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
              <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill={colors.secondary.color} fillRule="evenodd" stroke="none" />
              <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill={colors.secondary.shade} fillRule="evenodd" stroke="none" />
              <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default LowerLeftArm;
