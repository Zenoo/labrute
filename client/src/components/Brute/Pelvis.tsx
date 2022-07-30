import { Gender, BodyColors } from '@backend/types';
import React from 'react';

interface PelvisProps {
  gender: Gender;
  colors: BodyColors;
  type: number;
}

const Pelvis = ({ gender, colors, type }: PelvisProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="34.25" transform="matrix(1.0, 0.0, 0.0, 1.0, 9.5, 98.15)" width="46.3" xlinkHref="#pelvis" />
            <defs>
              <g id="pelvis" transform="matrix(1.0, 0.0, 0.0, 1.0, 22.85, 18.1)">
                <use height="34.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -22.85, -18.1)" width="46.3" xlinkHref="#pelvis-sprite51" />
              </g>
              <g id="pelvis-sprite51" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.8, 24.05)">
                <use height="29.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref="#pelvis-sprite52" />
              </g>
              <g id="pelvis-sprite52" transform="matrix(1.0, 0.0, 0.0, 1.0, 12.8, 20.75)">
                <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref="#pelvis-sprite53" />
                <use height="29.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref="#pelvis-sprite54" />
              </g>
              <g id="pelvis-sprite53" transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
                <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref="#pelvis-shape10" />
              </g>
              <g id="pelvis-shape10" transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
                <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill={colors.primary.color} fillRule="evenodd" stroke="none" />
                <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill={colors.primary.shade} fillRule="evenodd" stroke="none" />
                <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
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
          <use height="29.15" transform="matrix(0.9264, 0.0, 0.0, 0.8454, 13.8476, 107.6988)" width="30.4" xlinkHref="#pelvis" />
          <defs>
            <g id="pelvis" transform="matrix(1.0, 0.0, 0.0, 1.0, 15.6, 14.55)">
              <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.6, -14.55)" width="30.4" xlinkHref="#pelvis-sprite51" />
            </g>
            <g id="pelvis-sprite51" transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 20.5)">
              <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref="#pelvis-sprite52" />
            </g>
            <g id="pelvis-sprite52" transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 20.5)">
              <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref="#pelvis-sprite53" />
              <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref="#pelvis-sprite54" />
            </g>
            <g id="pelvis-sprite53" transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
              <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref="#pelvis-shape14" />
            </g>
            <g id="pelvis-shape14" transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
              <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill={colors.primary.color} fillRule="evenodd" stroke="none" />
              <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill={colors.primary.shade} fillRule="evenodd" stroke="none" />
              <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default Pelvis;
