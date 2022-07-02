import React from 'react';
import { Gender } from '../../utils/brute/types';

interface LowerRightLegProps {
  gender: Gender;
  type: number;
}

const LowerRightLeg = ({ gender, type }: LowerRightLegProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="52.5" transform="matrix(0.9933, -0.0446, 0.0446, 0.9933, -6.1486, 129.2465)" width="53.85" xlinkHref="#lowerRightLeg" />
            <defs>
              <g id="lowerRightLeg" transform="matrix(1.0, 0.0, 0.0, 1.0, 29.55, 4.4)">
                <use height="52.5" id="_p2" transform="matrix(1.0, 0.0, 0.0, 1.0, -29.55, -4.4)" width="53.85" xlinkHref="#sprite30" />
              </g>
              <g id="sprite30" transform="matrix(1.0, 0.0, 0.0, 1.0, 29.45, 20.8)">
                <use height="52.5" id="_p6" transform="matrix(1.0, 0.0, 0.0, 1.0, -24.0, -20.8)" width="43.9" xlinkHref="#sprite31" />
              </g>
              <g id="sprite31" transform="matrix(1.0, 0.0, 0.0, 1.0, 24.0, 20.8)">
                <use height="37.35" id="_col0" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref="#sprite32" />
                <use height="49.6" id="_p7" transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -24.0105, -17.758)" width="40.3" xlinkHref="#sprite33" />
              </g>
              <g id="sprite32" transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
                <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref="#shape7" />
              </g>
              <g id="shape7" transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
                <path d="M0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7 -0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6" fill="#d6baba" fillRule="evenodd" stroke="none" />
                <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
                <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
              </g>
              <g id="sprite33" transform="matrix(1.0, 0.0, 0.0, 1.0, 23.05, 21.1)">
                <use height="33.65" id="_col2" transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref="#sprite7" />
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
          <use height="49.55" transform="matrix(0.9662, -0.1855, 0.1855, 0.9662, 0.4364, 136.5038)" width="36.6" xlinkHref="#lowerRightLeg" />
          <defs>
            <g id="lowerRightLeg" transform="matrix(1.0, 0.0, 0.0, 1.0, 17.3, 4.3)">
              <use height="49.55" id="_p2" transform="matrix(1.0, 0.0, 0.0, 1.0, -17.3, -4.3)" width="36.6" xlinkHref="#sprite30" />
            </g>
            <g id="sprite30" transform="matrix(1.0, 0.0, 0.0, 1.0, 17.2, 20.7)">
              <use height="49.55" id="_p6" transform="matrix(1.0, 0.0, 0.0, 1.0, -17.2, -20.7)" width="36.6" xlinkHref="#sprite31" />
            </g>
            <g id="sprite31" transform="matrix(1.0, 0.0, 0.0, 1.0, 17.2, 20.7)">
              <use height="37.35" id="_col0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -18.65)" width="13.8" xlinkHref="#sprite32" />
              <use height="47.2" id="_p7" transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -17.1777, -18.2215)" width="33.15" xlinkHref="#sprite33" />
            </g>
            <g id="sprite32" transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
              <use height="37.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -18.65)" width="13.8" xlinkHref="#shape10" />
            </g>
            <g id="shape10" transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
              <path d="M0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7 -0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6" fill="#c6886a" fillRule="evenodd" stroke="none" />
              <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#efcdaf" fillRule="evenodd" stroke="none" />
              <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
            <g id="sprite33" transform="matrix(1.0, 0.0, 0.0, 1.0, 16.2, 21.05)">
              <use height="33.65" id="_col2" transform="matrix(0.9408, 0.3967, -0.1349, 0.5595, -11.6672, -4.7199)" width="30.4" xlinkHref="#sprite7" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default LowerRightLeg;
