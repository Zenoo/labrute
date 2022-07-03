import React from 'react';
import { BodyColors } from '../../utils/brute/colors';
import { Gender } from '../../utils/brute/types';

interface TummyProps {
  gender: Gender;
  colors: BodyColors;
  type: number;
}

const Tummy = ({ gender, colors, type }: TummyProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="44.05" transform="matrix(1.0, 0.0, 0.0415, 1.0, 0.5288, 95.25)" width="67.05" xlinkHref="#tummy" />
            <defs>
              <g id="tummy" transform="matrix(1.0, 0.0, 0.0, 1.0, 30.8, 11.35)">
                <use height="44.35" id="_p2" transform="matrix(1.0, 0.0, -0.0697, 0.9926, -27.6904, -11.3459)" width="63.95" xlinkHref="#sprite61" />
              </g>
              <g id="sprite61" transform="matrix(1.0, 0.0, 0.0, 1.0, 24.65, 20.95)">
                <use height="44.25" id="_p5" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -20.9)" width="37.4" xlinkHref="#sprite62" />
              </g>
              <g id="sprite62" transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 20.9)">
                <use height="22.55" id="_col0" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref="#sprite63" />
                <use height="44.25" id="_p7" transform="matrix(1.0, 0.0, 0.0, 1.0, -14.05, -20.9)" width="37.4" xlinkHref="#sprite64" />
              </g>
              <g id="sprite63" transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
                <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref="#shape12" />
              </g>
              <g id="shape12" transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
                <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
                <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
                <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
              </g>
              <g id="sprite64" transform="matrix(1.0, 0.0, 0.0, 1.0, 17.95, 28.0)">
                <use height="28.6" id="_p1" transform="matrix(1.0, 0.0, 0.0, 1.0, -17.0, -14.3)" width="34.05" xlinkHref="#sprite65" />
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
          <use height="53.3" transform="matrix(0.743, 0.0429, -0.1627, 0.9818, 8.9815, 98.2813)" width="65.0" xlinkHref="#tummy" />
          <defs>
            <g id="tummy" transform="matrix(1.0, 0.0, 0.0, 1.0, 26.3, 11.5)">
              <use height="53.7" id="_p2" transform="matrix(1.0, 0.0, -0.0697, 0.9926, -22.5799, -11.4948)" width="61.3" xlinkHref="#sprite60" />
            </g>
            <g id="sprite60" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.55, 21.1)">
              <use height="53.7" id="_p5" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.55, -21.1)" width="61.3" xlinkHref="#sprite61" />
            </g>
            <g id="sprite61" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.1)">
              <use height="22.55" id="_col0" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref="#sprite62" />
              <use height="53.7" id="_p7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.65, -21.1)" width="61.3" xlinkHref="#sprite63" />
            </g>
            <g id="sprite62" transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
              <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref="#shape15" />
            </g>
            <g id="shape15" transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
              <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
              <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
              <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
            <g id="sprite63" transform="matrix(1.0, 0.0, 0.0, 1.0, 23.55, 28.2)">
              <use height="27.8" id="_p1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.35, -13.8)" width="46.2" xlinkHref="#sprite64" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default Tummy;
