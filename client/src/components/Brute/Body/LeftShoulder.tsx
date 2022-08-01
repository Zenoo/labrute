import { Gender, BodyColors } from '@eternaltwin/labrute-core/types';
import React from 'react';

interface LeftShoulderProps {
  id: number;
  gender: Gender;
  colors: BodyColors;
  type: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LeftShoulder = ({ id, gender, colors, type }: LeftShoulderProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="48.0" transform="matrix(1.0, 0.0, 0.0, 1.0, 35.5, 65.55)" width="56.75" xlinkHref={`#${id}-leftShoulder`} />
            <defs>
              <g id={`${id}-leftShoulder`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.75, 20.75)">
                <use height="48.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.75, -20.75)" width="56.75" xlinkHref={`#${id}-leftShoulder-sprite99`} />
              </g>
              <g id={`${id}-leftShoulder-sprite99`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.75, 13.7)">
                <use height="36.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -10.1)" width="43.5" xlinkHref={`#${id}-leftShoulder-sprite100`} />
              </g>
              <g id={`${id}-leftShoulder-sprite100`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.9, 17.15)">
                <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#${id}-leftShoulder-sprite21`} />
                <use height="36.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.9, -17.15)" width="43.5" xlinkHref={`#${id}-leftShoulder-sprite101`} />
              </g>
              <g id={`${id}-leftShoulder-sprite101`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.8, 16.65)">
                <use height="22.3" transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#${id}-leftShoulder-sprite22`} />
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
          <use height="37.15" transform="matrix(0.7955, -0.2132, 0.2132, 0.7955, 35.4792, 78.3686)" width="34.95" xlinkHref={`#${id}-leftShoulder`} />
          <defs>
            <g id={`${id}-leftShoulder`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.6, 17.15)">
              <use height="37.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -14.6, -17.15)" width="34.95" xlinkHref={`#${id}-leftShoulder-sprite99`} />
            </g>
            <g id={`${id}-leftShoulder-sprite99`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.6, 10.1)">
              <use height="37.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.6, -10.1)" width="34.95" xlinkHref={`#${id}-leftShoulder-sprite100`} />
            </g>
            <g id={`${id}-leftShoulder-sprite100`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.6, 17.15)">
              <use height="14.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.95, -6.95)" width="13.8" xlinkHref={`#${id}-leftShoulder-sprite21`} />
              <use height="37.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -14.6, -17.15)" width="34.95" xlinkHref={`#${id}-leftShoulder-sprite101`} />
            </g>
            <g id={`${id}-leftShoulder-sprite101`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.5, 16.65)">
              <use height="22.3" transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#${id}-leftShoulder-sprite22`} />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default LeftShoulder;
