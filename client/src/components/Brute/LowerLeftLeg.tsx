import { Gender, BodyColors } from '@backend/types';
import React from 'react';

interface LowerLeftLegProps {
  id: number;
  gender: Gender;
  colors: BodyColors;
  type: number;
}

const LowerLeftLeg = ({ id, gender, colors, type }: LowerLeftLegProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="51.8" transform="matrix(0.9557, -0.2801, 0.2801, 0.9557, 22.7373, 149.4358)" width="41.8" xlinkHref={`#${id}-lowerLeftLeg`} />
            <defs>
              <g id={`${id}-lowerLeftLeg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
                <use height="51.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref={`#${id}-lowerLeftLeg-sprite47`} />
              </g>
              <g id={`${id}-lowerLeftLeg-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
                <use height="51.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#${id}-lowerLeftLeg-sprite48`} />
              </g>
              <g id={`${id}-lowerLeftLeg-sprite48`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
                {/* This next path is declared in LowerRightLeg and shared here */}
                <use height="37.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#${id}-lowerRightLeg-sprite32`} />
                <use height="51.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#${id}-lowerLeftLeg-sprite49`} />
              </g>
              <g id={`${id}-lowerLeftLeg-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
                <use height="33.65" transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#${id}-sprite7-lower-left-leg`} />
              </g>
              <g id={`${id}-sprite7-lower-left-leg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
                <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#${id}-shape1-lower-left-leg`} />
              </g>
              <g id={`${id}-shape1-lower-left-leg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
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
          <use height="50.85" transform="matrix(0.9319, -0.3188, 0.3188, 0.9319, 18.7911, 150.6046)" width="32.25" xlinkHref={`#${id}-lowerLeftLeg`} />
          <defs>
            <g id={`${id}-lowerLeftLeg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.55, 10.25)">
              <use height="50.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.55, -10.25)" width="32.25" xlinkHref={`#${id}-lowerLeftLeg-sprite47`} />
            </g>
            <g id={`${id}-lowerLeftLeg-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.45, 26.65)">
              <use height="50.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.45, -26.65)" width="32.25" xlinkHref={`#${id}-lowerLeftLeg-sprite48`} />
            </g>
            <g id={`${id}-lowerLeftLeg-sprite48`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.45, 26.65)">
              {/* This next path is declared in LowerRightLeg and shared here */}
              <use height="37.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -18.65)" width="13.8" xlinkHref={`#${id}-lowerRightLeg-sprite32`} />
              <use height="50.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.45, -26.65)" width="32.25" xlinkHref={`#${id}-lowerLeftLeg-sprite49`} />
            </g>
            <g id={`${id}-lowerLeftLeg-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.0, 28.2)">
              <use height="33.65" transform="matrix(1.021, 0.0492, 0.0358, 0.6471, -16.0109, -1.5864)" width="30.4" xlinkHref={`#${id}-sprite7-lower-left-leg`} />
            </g>
            <g id={`${id}-sprite7-lower-left-leg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
              <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#${id}-shape1-lower-left-leg`} />
            </g>
            <g id={`${id}-shape1-lower-left-leg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
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

export default LowerLeftLeg;
