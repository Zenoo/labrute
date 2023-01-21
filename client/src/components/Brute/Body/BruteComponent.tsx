import { Brute } from '@labrute/core';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import Head from './Head/Head';
import LongHair from './Head/LongHair';
import LeftFoot from './LeftFoot';
import LeftHand from './LeftHand';
import LeftShoulder from './LeftShoulder';
import LowerLeftArm from './LowerLeftArm';
import LowerLeftLeg from './LowerLeftLeg';
import LowerRightArm from './LowerRightArm';
import LowerRightLeg from './LowerRightLeg';
import Pelvis from './Pelvis';
import RightFoot from './RightFoot';
import RightHand from './RightHand';
import RightShoulder from './RightShoulder';
import Torso from './Torso';
import Tummy from './Tummy';
import UpperLeftArm from './UpperLeftArm';
import UpperLeftLeg from './UpperLeftLeg';
import UpperRightArm from './UpperRightArm';
import UpperRightLeg from './UpperRightLeg';

interface BruteComponentProps extends BoxProps {
  brute: Brute;
  inverted?: boolean;
  shadow?: boolean
}

const BruteComponent = ({
  brute,
  inverted,
  shadow = true,
  sx,
  ...rest
}: BruteComponentProps) => {
  const props = {
    id: brute.name,
    gender: brute.data.gender,
    colors: brute.data.colors,
  };

  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 167 221"
      sx={{
        transform: inverted ? 'scale(-1, 1)' : 'scale(1, 1)',
        filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3))',
        ...sx,
      }}
      {...rest}
    >
      {shadow && (
        <use xmlns="http://www.w3.org/2000/svg" height="80.0" transform="matrix(1.2543, 0.0, 0.0, 0.5937, 25, 165)" width="80.0" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`#${brute.name}-shadowSprite`} />
      )}
      <g transform="matrix(1, 0, 0, 1, 40, 7)">
        <LongHair {...props} type={brute.data.body.longHair} />
        <LowerRightArm {...props} type={brute.data.body.lowerRightArm} />
        <RightHand {...props} type={brute.data.body.rightHand} />
        <UpperRightArm {...props} type={brute.data.body.upperRightArm} />
        <RightShoulder {...props} type={brute.data.body.rightShoulder} />
        <RightFoot {...props} type={brute.data.body.rightFoot} />
        <LowerRightLeg {...props} type={brute.data.body.lowerRightLeg} />
        <UpperRightLeg {...props} type={brute.data.body.upperRightLeg} />
        <LeftFoot {...props} type={brute.data.body.leftFoot} />
        <LowerLeftLeg {...props} type={brute.data.body.lowerLeftLeg} />
        <Pelvis {...props} type={brute.data.body.pelvis} />
        <UpperLeftLeg {...props} type={brute.data.body.upperLeftLeg} />
        <Tummy {...props} type={brute.data.body.tummy} />
        <Torso {...props} type={brute.data.body.torso} />
        <Head {...props} type={brute.data.body.head} />
        <LeftHand {...props} type={brute.data.body.leftHand} />
        <UpperLeftArm {...props} type={brute.data.body.upperLeftArm} />
        <LowerLeftArm {...props} type={brute.data.body.lowerLeftArm} />
        <LeftShoulder {...props} type={brute.data.body.leftShoulder} />
      </g>
      <defs>
        <g id={`${brute.name}-shadowSprite`} transform="matrix(1.0, 0.0, 0.0, 1.0, 40.0, 40.0)">
          <use height="80.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -40.0, -40.0)" width="80.0" xlinkHref={`#${brute.name}-shadow`} />
        </g>
        <g id={`${brute.name}-shadow`} transform="matrix(1.0, 0.0, 0.0, 1.0, 40.0, 40.0)">
          <path d="M28.25 -28.3 Q40.0 -16.55 40.0 0.0 40.0 16.55 28.25 28.25 16.55 40.0 0.0 40.0 -16.55 40.0 -28.3 28.25 -40.0 16.55 -40.0 0.0 -40.0 -16.55 -28.3 -28.3 -16.55 -40.0 0.0 -40.0 16.55 -40.0 28.25 -28.3" fill="url(#shadowGradient)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0475, 0.0, 0.0, 0.0475, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`${brute.name}-shadowGradient`} r="819.2" spreadMethod="pad">
          <stop offset="0.4117647058823529" stopColor="#2b0000" stopOpacity="0.047058824" />
          <stop offset="1.0" stopColor="#110000" stopOpacity="0.0" />
        </radialGradient>
      </defs>
    </Box>
  );
};

export default BruteComponent;
