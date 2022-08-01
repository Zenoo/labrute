import { BodyColors, BodyParts, Gender } from '@eternaltwin/labrute-core/types';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import Head from './Head/Head.js';
import LeftFoot from './LeftFoot.js';
import LeftHand from './LeftHand.js';
import LeftShoulder from './LeftShoulder.js';
import LongHair from './Head/LongHair.js';
import LowerLeftArm from './LowerLeftArm.js';
import LowerLeftLeg from './LowerLeftLeg.js';
import LowerRightArm from './LowerRightArm.js';
import LowerRightLeg from './LowerRightLeg.js';
import Pelvis from './Pelvis.js';
import RightFoot from './RightFoot.js';
import RightHand from './RightHand.js';
import RightShoulder from './RightShoulder.js';
import Torso from './Torso.js';
import Tummy from './Tummy.js';
import UpperLeftArm from './UpperLeftArm.js';
import UpperLeftLeg from './UpperLeftLeg.js';
import UpperRightArm from './UpperRightArm.js';
import UpperRightLeg from './UpperRightLeg.js';

interface BruteComponentProps extends Omit<BoxProps, 'id'> {
  id: number;
  gender: Gender;
  bodyParts: BodyParts;
  colors: BodyColors;
  inverted?: boolean;
  shadow?: boolean
}

const BruteComponent = ({
  id,
  gender,
  bodyParts,
  colors,
  inverted,
  shadow = true,
  sx,
  ...rest
}: BruteComponentProps) => {
  const props = {
    id,
    gender,
    colors,
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
        <use xmlns="http://www.w3.org/2000/svg" height="80.0" transform="matrix(1.2543, 0.0, 0.0, 0.5937, 25, 165)" width="80.0" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`#${id}-shadowSprite`} />
      )}
      <g transform="matrix(1, 0, 0, 1, 40, 7)">
        <LongHair {...props} type={bodyParts.longHair} />
        <LowerRightArm {...props} type={bodyParts.lowerRightArm} />
        <RightHand {...props} type={bodyParts.rightHand} />
        <UpperRightArm {...props} type={bodyParts.upperRightArm} />
        <RightShoulder {...props} type={bodyParts.rightShoulder} />
        <RightFoot {...props} type={bodyParts.rightFoot} />
        <LowerRightLeg {...props} type={bodyParts.lowerRightLeg} />
        <UpperRightLeg {...props} type={bodyParts.upperRightLeg} />
        <LeftFoot {...props} type={bodyParts.leftFoot} />
        <LowerLeftLeg {...props} type={bodyParts.lowerLeftLeg} />
        <Pelvis {...props} type={bodyParts.pelvis} />
        <UpperLeftLeg {...props} type={bodyParts.upperLeftLeg} />
        <Tummy {...props} type={bodyParts.tummy} />
        <Torso {...props} type={bodyParts.torso} />
        <Head {...props} type={bodyParts.head} />
        <LeftHand {...props} type={bodyParts.leftHand} />
        <UpperLeftArm {...props} type={bodyParts.upperLeftArm} />
        <LowerLeftArm {...props} type={bodyParts.lowerLeftArm} />
        <LeftShoulder {...props} type={bodyParts.leftShoulder} />
      </g>
      <defs>
        <g id={`${id}-shadowSprite`} transform="matrix(1.0, 0.0, 0.0, 1.0, 40.0, 40.0)">
          <use height="80.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -40.0, -40.0)" width="80.0" xlinkHref={`#${id}-shadow`} />
        </g>
        <g id={`${id}-shadow`} transform="matrix(1.0, 0.0, 0.0, 1.0, 40.0, 40.0)">
          <path d="M28.25 -28.3 Q40.0 -16.55 40.0 0.0 40.0 16.55 28.25 28.25 16.55 40.0 0.0 40.0 -16.55 40.0 -28.3 28.25 -40.0 16.55 -40.0 0.0 -40.0 -16.55 -28.3 -28.3 -16.55 -40.0 0.0 -40.0 16.55 -40.0 28.25 -28.3" fill="url(#shadowGradient)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0475, 0.0, 0.0, 0.0475, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`${id}-shadowGradient`} r="819.2" spreadMethod="pad">
          <stop offset="0.4117647058823529" stopColor="#2b0000" stopOpacity="0.047058824" />
          <stop offset="1.0" stopColor="#110000" stopOpacity="0.0" />
        </radialGradient>
      </defs>
    </Box>
  );
};

export default BruteComponent;
