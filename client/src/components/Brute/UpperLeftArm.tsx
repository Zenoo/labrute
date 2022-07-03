import React from 'react';
import { BodyColors } from '../../utils/brute/colors';
import { Gender } from '../../utils/brute/types';

interface UpperLeftArmProps {
  gender: Gender;
  colors: BodyColors;
  type: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UpperLeftArm = ({ gender, colors, type }: UpperLeftArmProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="30.75" transform="matrix(1.0, 0.0, 0.0, 1.0, 38.5, 81.4)" width="40.3" xlinkHref="#upperLeftArm" />
            <defs>
              <g id="upperLeftArm" transform="matrix(1.0, 0.0, 0.0, 1.0, 20.65, 16.05)">
                <use height="30.75" id="_p2" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.65, -16.05)" width="40.3" xlinkHref="#sprite91" />
              </g>
              <g id="sprite91" transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
                <use height="30.55" id="_p5" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref="#sprite92" />
              </g>
              <g id="sprite92" transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
                <use height="28.0" id="_col0" transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref="#sprite15" />
                <use height="30.55" id="_p7" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref="#sprite93" />
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
          <use height="30.4" transform="matrix(0.9598, -0.2353, 0.2353, 0.9598, 41.9024, 83.3949)" width="20.05" xlinkHref="#upperLeftArm" />
          <defs>
            <g id="upperLeftArm" transform="matrix(1.0, 0.0, 0.0, 1.0, 10.45, 15.8)">
              <use height="30.4" id="_p2" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.45, -15.8)" width="20.05" xlinkHref="#sprite90" />
            </g>
            <g id="sprite90" transform="matrix(1.0, 0.0, 0.0, 1.0, 10.05, 15.25)">
              <use height="30.4" id="_p5" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.05, -15.25)" width="20.05" xlinkHref="#sprite91" />
            </g>
            <g id="sprite91" transform="matrix(1.0, 0.0, 0.0, 1.0, 10.05, 15.25)">
              <use height="28.0" id="_col0" transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref="#sprite15" />
              <use height="30.4" id="_p7" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.05, -15.25)" width="20.05" xlinkHref="#sprite92" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default UpperLeftArm;
