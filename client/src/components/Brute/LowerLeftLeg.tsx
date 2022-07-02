import React from 'react';
import { Gender } from '../../utils/brute/types';

interface LowerLeftLegProps {
  gender: Gender;
  type: number;
}

const LowerLeftLeg = ({ gender, type }: LowerLeftLegProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="51.8" transform="matrix(0.9557, -0.2801, 0.2801, 0.9557, 22.7373, 149.4358)" width="41.8" xlinkHref="#lowerLeftLeg" />
            <defs>
              <g id="lowerLeftLeg" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
                <use height="51.8" id="_p2" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref="#sprite47" />
              </g>
              <g id="sprite47" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
                <use height="51.8" id="_p6" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref="#sprite48" />
              </g>
              <g id="sprite48" transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
                <use height="37.35" id="_col0" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref="#sprite32" />
                <use height="51.8" id="_p7" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref="#sprite49" />
              </g>
              <g id="sprite49" transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
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
          <use height="50.85" transform="matrix(0.9319, -0.3188, 0.3188, 0.9319, 18.7911, 150.6046)" width="32.25" xlinkHref="#lowerLeftLeg" />
          <defs>
            <g id="lowerLeftLeg" transform="matrix(1.0, 0.0, 0.0, 1.0, 15.55, 10.25)">
              <use height="50.85" id="_p2" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.55, -10.25)" width="32.25" xlinkHref="#sprite47" />
            </g>
            <g id="sprite47" transform="matrix(1.0, 0.0, 0.0, 1.0, 15.45, 26.65)">
              <use height="50.85" id="_p6" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.45, -26.65)" width="32.25" xlinkHref="#sprite48" />
            </g>
            <g id="sprite48" transform="matrix(1.0, 0.0, 0.0, 1.0, 15.45, 26.65)">
              <use height="37.35" id="_col0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -18.65)" width="13.8" xlinkHref="#sprite32" />
              <use height="50.85" id="_p7" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.45, -26.65)" width="32.25" xlinkHref="#sprite49" />
            </g>
            <g id="sprite49" transform="matrix(1.0, 0.0, 0.0, 1.0, 16.0, 28.2)">
              <use height="33.65" id="_col2" transform="matrix(1.021, 0.0492, 0.0358, 0.6471, -16.0109, -1.5864)" width="30.4" xlinkHref="#sprite7" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default LowerLeftLeg;
