import React from 'react';
import { Gender } from '../../utils/brute/types';

interface LowerLeftARmProps {
  gender: Gender;
  type: number;
}

const LowerLeftArm = ({ gender, type }: LowerLeftARmProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="62.85" transform="matrix(1.0, 0.0, 0.0, 1.0, 39.2, 83.1)" width="64.1" xlinkHref="#lowerLeftArm" />
            <defs>
              <g id="lowerLeftArm" transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
                <use height="62.85" id="_p2" transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.1" xlinkHref="#sprite95" />
              </g>
              <g id="sprite95" transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
                <use height="62.85" id="_p5" transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref="#sprite96" />
              </g>
              <g id="sprite96" transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
                <use height="28.0" id="_col0" transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref="#sprite5" />
                <use height="62.85" id="_p7" transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref="#sprite97" />
              </g>
              <g id="sprite97" transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
                <use height="33.65" id="_col2" transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref="#sprite7" />
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
          <use height="57.85" transform="matrix(0.5047, 0.8466, -0.8466, 0.5047, 67.955, 80.8241)" width="42.4" xlinkHref="#lowerLeftArm" />
          <defs>
            <g id="lowerLeftArm" transform="matrix(1.0, 0.0, 0.0, 1.0, 20.6, 29.0)">
              <use height="57.85" id="_p2" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.6, -29.0)" width="42.4" xlinkHref="#sprite94" />
            </g>
            <g id="sprite94" transform="matrix(1.0, 0.0, 0.0, 1.0, 20.6, 29.0)">
              <use height="57.85" id="_p5" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.6, -29.0)" width="42.4" xlinkHref="#sprite95" />
            </g>
            <g id="sprite95" transform="matrix(1.0, 0.0, 0.0, 1.0, 20.6, 29.0)">
              <use height="28.0" id="_col0" transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.6711, -14.6573)" width="12.0" xlinkHref="#sprite96" />
              <use height="57.85" id="_p7" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.6, -29.0)" width="42.4" xlinkHref="#sprite97" />
            </g>
            <g id="sprite96" transform="matrix(1.0, 0.0, 0.0, 1.0, 6.3, 1.45)">
              <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.3, -1.45)" width="12.0" xlinkHref="#shape28" />
            </g>
            <g id="shape28" transform="matrix(1.0, 0.0, 0.0, 1.0, 6.3, 1.45)">
              <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 -4.2 10.2 -6.3 6.75 L-5.4 5.15 -5.0 3.6 -4.95 3.55 -3.7 3.3 Q-1.8 3.3 -0.15 6.15 L0.1 6.6 0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
              <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 0.1 6.6 -0.15 6.15 Q-1.8 3.3 -3.7 3.3 L-4.95 3.55 -5.0 3.6 -4.8 2.95 -4.4 2.0 -4.4 1.9 -4.35 1.75 -3.9 0.55 Q-3.4 -1.05 -0.1 -1.45 1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
              <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 -4.2 10.2 -6.3 6.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
            <g id="sprite97" transform="matrix(1.0, 0.0, 0.0, 1.0, 21.15, 30.55)">
              <use height="33.65" id="_col2" transform="matrix(0.8944, -0.0586, 0.0396, 0.6048, -13.8145, -2.0958)" width="30.4" xlinkHref="#sprite7" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default LowerLeftArm;
