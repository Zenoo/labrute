/* eslint-disable camelcase */
import { GlobalStyles } from '@mui/material';
import React from 'react';
import { ArriveBear_FRAMES, ArriveBear_MARGIN, ArriveBear_WIDTH } from '../../components/animations/bear/ArriveBear.js';
import { AttackBear_FRAMES, AttackBear_MARGIN, AttackBear_WIDTH } from '../../components/animations/bear/AttackBear.js';
import { DeathBear_WIDTH, DeathBear_MARGIN, DeathBear_FRAMES } from '../../components/animations/bear/DeathBear.js';
import { IddleBear_WIDTH, IddleBear_MARGIN, IddleBear_FRAMES } from '../../components/animations/bear/IddleBear.js';
import { RunBear_WIDTH, RunBear_MARGIN, RunBear_FRAMES } from '../../components/animations/bear/RunBear.js';
import { TrappedBear_FRAMES, TrappedBear_MARGIN, TrappedBear_WIDTH } from '../../components/animations/bear/TrappedBear.js';
import { IddleMaleBrute_WIDTH, IddleMaleBrute_MARGIN, IddleMaleBrute_FRAMES } from '../../components/animations/brute/male/IddleMaleBrute.js';
import { TrappedMaleBrute_WIDTH, TrappedMaleBrute_MARGIN, TrappedMaleBrute_FRAMES } from '../../components/animations/brute/male/TrappedMaleBrute.js';
import { ArriveDog_WIDTH, ArriveDog_MARGIN, ArriveDog_FRAMES } from '../../components/animations/dog/ArriveDog.js';
import { AttackDog_MARGIN, AttackDog_WIDTH, AttackDog_FRAMES } from '../../components/animations/dog/AttackDog.js';
import { DeathDog_MARGIN, DeathDog_WIDTH, DeathDog_FRAMES } from '../../components/animations/dog/DeathDog.js';
import { EvadeDog_MARGIN, EvadeDog_WIDTH, EvadeDog_FRAMES } from '../../components/animations/dog/EvadeDog.js';
import { IddleDog_MARGIN, IddleDog_WIDTH, IddleDog_FRAMES } from '../../components/animations/dog/IddleDog.js';
import { RunDog_MARGIN, RunDog_WIDTH, RunDog_FRAMES } from '../../components/animations/dog/RunDog.js';
import { TrappedDog_MARGIN, TrappedDog_WIDTH, TrappedDog_FRAMES } from '../../components/animations/dog/TrappedDog.js';
import { ArrivePanther_WIDTH, ArrivePanther_MARGIN, ArrivePanther_FRAMES } from '../../components/animations/panther/ArrivePanther.js';
import { AttackPanther_MARGIN, AttackPanther_WIDTH, AttackPanther_FRAMES } from '../../components/animations/panther/AttackPanther.js';
import { DeathPanther_MARGIN, DeathPanther_WIDTH, DeathPanther_FRAMES } from '../../components/animations/panther/DeathPanther.js';
import { EvadePanther_MARGIN, EvadePanther_WIDTH, EvadePanther_FRAMES } from '../../components/animations/panther/EvadePanther.js';
import { IddlePanther_MARGIN, IddlePanther_WIDTH, IddlePanther_FRAMES } from '../../components/animations/panther/IddlePanther.js';
import { RunPanther_MARGIN, RunPanther_WIDTH, RunPanther_FRAMES } from '../../components/animations/panther/RunPanther.js';
import { TrappedPanther_MARGIN, TrappedPanther_WIDTH, TrappedPanther_FRAMES } from '../../components/animations/panther/TrappedPanther.js';

const fightAnimations = (
  <GlobalStyles styles={{
    // STAGGER
    '@keyframes stagger': {
      '0%': {
        transform: 'translateX(0)'
      },
      '10%': {
        transform: 'translateX(8px)'
      },
      '20%': {
        transform: 'translateX(4px)'
      },
      '30%': {
        transform: 'translateX(8px)'
      },
      '40%': {
        transform: 'translateX(4px)'
      },
      '60%': {
        transform: 'translateX(8px)'
      },
      '80%': {
        transform: 'translateX(0)'
      },
      '100%': {
        transform: 'translateX(0)'
      }
    },
    // INVERTED STAGGER
    '@keyframes inverted-stagger': {
      '0%': {
        transform: 'translateX(0) scale(-1, 1)'
      },
      '10%': {
        transform: 'translateX(-8px) scale(-1, 1)'
      },
      '20%': {
        transform: 'translateX(-4px) scale(-1, 1)'
      },
      '30%': {
        transform: 'translateX(-8px) scale(-1, 1)'
      },
      '40%': {
        transform: 'translateX(-4px) scale(-1, 1)'
      },
      '60%': {
        transform: 'translateX(-8px) scale(-1, 1)'
      },
      '80%': {
        transform: 'translateX(0) scale(-1, 1)'
      },
      '100%': {
        transform: 'translateX(0) scale(-1, 1)'
      }
    },
    // JUMP
    '@keyframes jump': {
      '50%': {
        top: -20,
      },
      '100%': {
        top: 0,
      }
    },
    // BEAR ARRIVE
    '@keyframes ArriveBear': {
      // Hold first frame for 0.5s
      '50%': {
        left: 0,
      },
      '100%': {
        left: -(ArriveBear_WIDTH + ArriveBear_MARGIN) * (ArriveBear_FRAMES - 1),
      }
    },
    // BEAR ARRIVE INVERTED
    '@keyframes ArriveBearInverted': {
      // Hold first frame for 0.5s
      '50%': {
        left: -(ArriveBear_WIDTH + ArriveBear_MARGIN) * (ArriveBear_FRAMES - 1) - ArriveBear_MARGIN,
      },
      '100%': {
        left: -ArriveBear_MARGIN,
      }
    },
    // BEAR ATTACK
    '@keyframes AttackBear': {
      '100%': {
        left: -(AttackBear_WIDTH + AttackBear_MARGIN) * (AttackBear_FRAMES - 1),
      }
    },
    // BEAR ATTACK INVERTED
    '@keyframes AttackBearInverted': {
      '100%': {
        left: -AttackBear_MARGIN,
      }
    },
    // BEAR DEATH
    '@keyframes DeathBear': {
      '100%': {
        left: -(DeathBear_WIDTH + DeathBear_MARGIN) * (DeathBear_FRAMES - 1),
      }
    },
    // BEAR DEATH INVERTED
    '@keyframes DeathBearInverted': {
      '100%': {
        left: -DeathBear_MARGIN
      }
    },
    // BEAR IDDLE
    '@keyframes IddleBear': {
      '100%': {
        left: -(IddleBear_WIDTH + IddleBear_MARGIN)
          * (IddleBear_FRAMES - 1)
          - IddleBear_MARGIN,
      }
    },
    // BEAR IDDLE INVERTED
    '@keyframes IddleBearInverted': {
      '100%': {
        left: -IddleBear_MARGIN,
      }
    },
    // BEAR RUN
    '@keyframes RunBear': {
      '100%': {
        left: -(RunBear_WIDTH + RunBear_MARGIN) * (RunBear_FRAMES - 1)
          - RunBear_MARGIN,
      }
    },
    // BEAR RUN INVERTED
    '@keyframes RunBearInverted': {
      '100%': {
        left: -RunBear_MARGIN
      }
    },
    // BEAR TRAPPED
    '@keyframes TrappedBear': {
      '100%': {
        left: -(TrappedBear_WIDTH + TrappedBear_MARGIN) * (TrappedBear_FRAMES - 1)
          - TrappedBear_MARGIN,
      }
    },
    // BEAR TRAPPED INVERTED
    '@keyframes TrappedBearInverted': {
      '100%': {
        left: -TrappedBear_MARGIN
      }
    },
    // DOG ARRIVE
    '@keyframes ArriveDog': {
      // Hold first frame for 0.5s
      '50%': {
        left: -(ArriveDog_WIDTH + ArriveDog_MARGIN) * (ArriveDog_FRAMES - 1) - ArriveDog_MARGIN,
      },
      '100%': {
        left: -ArriveDog_MARGIN,
      }
    },
    // DOG ARRIVE INVERTED
    '@keyframes ArriveDogInverted': {
      // Hold first frame for 0.5s
      '50%': {
        left: 0,
      },
      '100%': {
        left: -(ArriveDog_WIDTH + ArriveDog_MARGIN) * (ArriveDog_FRAMES - 1),
      }
    },
    // DOG ATTACK
    '@keyframes AttackDog': {
      '100%': {
        left: -AttackDog_MARGIN,
      }
    },
    // DOG ATTACK INVERTED
    '@keyframes AttackDogInverted': {
      '100%': {
        left: -(AttackDog_WIDTH + AttackDog_MARGIN) * (AttackDog_FRAMES - 1),
      }
    },
    // DOG DEATH
    '@keyframes DeathDog': {
      '100%': {
        left: -DeathDog_MARGIN
      }
    },
    // DOG DEATH INVERTED
    '@keyframes DeathDogInverted': {
      '100%': {
        left: -(DeathDog_WIDTH + DeathDog_MARGIN) * (DeathDog_FRAMES - 1),
      }
    },
    // DOG EVADE
    '@keyframes EvadeDog': {
      '100%': {
        left: -EvadeDog_MARGIN,
      }
    },
    // DOG EVADE INVERTED
    '@keyframes EvadeDogInverted': {
      '100%': {
        left: -(EvadeDog_WIDTH + EvadeDog_MARGIN) * (EvadeDog_FRAMES - 1),
      }
    },
    // DOG IDDLE
    '@keyframes IddleDog': {
      '100%': {
        left: -IddleDog_MARGIN,
      }
    },
    // DOG IDDLE INVERTED
    '@keyframes IddleDogInverted': {
      '100%': {
        left: -(IddleDog_WIDTH + IddleDog_MARGIN) * (IddleDog_FRAMES - 1),
      }
    },
    // DOG RUN
    '@keyframes RunDog': {
      '100%': {
        left: -RunDog_MARGIN,
      }
    },
    // DOG RUN INVERTED
    '@keyframes RunDogInverted': {
      '100%': {
        left: -(RunDog_WIDTH + RunDog_MARGIN) * (RunDog_FRAMES - 1),
      }
    },
    // DOG TRAPPED
    '@keyframes TrappedDog': {
      '100%': {
        left: -TrappedDog_MARGIN,
      }
    },
    // DOG TRAPPED INVERTED
    '@keyframes TrappedDogInverted': {
      '100%': {
        left: -(TrappedDog_WIDTH + TrappedDog_MARGIN) * (TrappedDog_FRAMES - 1),
      }
    },
    // PANTHER ARRIVE
    '@keyframes ArrivePanther': {
      // Hold first frame for 0.5s
      '50%': {
        left: -(ArrivePanther_WIDTH + ArrivePanther_MARGIN)
          * (ArrivePanther_FRAMES - 1) - ArrivePanther_MARGIN,
      },
      '100%': {
        left: -ArrivePanther_MARGIN,
      }
    },
    // PANTHER ARRIVE INVERTED
    '@keyframes ArrivePantherInverted': {
      // Hold first frame for 0.5s
      '50%': {
        left: 0,
      },
      '100%': {
        left: -(ArrivePanther_WIDTH + ArrivePanther_MARGIN) * (ArrivePanther_FRAMES - 1),
      }
    },
    // PANTHER ATTACK
    '@keyframes AttackPanther': {
      '100%': {
        left: -AttackPanther_MARGIN,
      }
    },
    // PANTHER ATTACK INVERTED
    '@keyframes AttackPantherInverted': {
      '100%': {
        left: -(AttackPanther_WIDTH + AttackPanther_MARGIN) * (AttackPanther_FRAMES - 1),
      }
    },
    // PANTHER DEATH
    '@keyframes DeathPanther': {
      '100%': {
        left: -DeathPanther_MARGIN
      }
    },
    // PANTHER DEATH INVERTED
    '@keyframes DeathPantherInverted': {
      '100%': {
        left: -(DeathPanther_WIDTH + DeathPanther_MARGIN) * (DeathPanther_FRAMES - 1),
      }
    },
    // PANTHER EVADE
    '@keyframes EvadePanther': {
      '100%': {
        left: -EvadePanther_MARGIN,
      }
    },
    // PANTHER EVADE INVERTED
    '@keyframes EvadePantherInverted': {
      '100%': {
        left: -(EvadePanther_WIDTH + EvadePanther_MARGIN) * (EvadePanther_FRAMES - 1),
      }
    },
    // PANTHER IDDLE
    '@keyframes IddlePanther': {
      '100%': {
        left: -IddlePanther_MARGIN,
      }
    },
    // PANTHER IDDLE INVERTED
    '@keyframes IddlePantherInverted': {
      '100%': {
        left: -(IddlePanther_WIDTH + IddlePanther_MARGIN) * (IddlePanther_FRAMES - 1),
      }
    },
    // PANTHER RUN
    '@keyframes RunPanther': {
      '100%': {
        left: -RunPanther_MARGIN,
      }
    },
    // PANTHER RUN INVERTED
    '@keyframes RunPantherInverted': {
      '100%': {
        left: -(RunPanther_WIDTH + RunPanther_MARGIN) * (RunPanther_FRAMES - 1),
      }
    },
    // PANTHER TRAPPED
    '@keyframes TrappedPanther': {
      '100%': {
        left: -TrappedPanther_MARGIN,
      }
    },
    // PANTHER TRAPPED INVERTED
    '@keyframes TrappedPantherInverted': {
      '100%': {
        left: -(TrappedPanther_WIDTH + TrappedPanther_MARGIN) * (TrappedPanther_FRAMES - 1),
      }
    },
    // MALE BRUTE IDDLE
    '@keyframes IddleMaleBrute': {
      '100%': {
        left: -(IddleMaleBrute_WIDTH + IddleMaleBrute_MARGIN)
          * (IddleMaleBrute_FRAMES - 1),
      }
    },
    // MALE BRUTE IDDLE INVERTED
    '@keyframes IddleMaleBruteInverted': {
      '100%': {
        left: -IddleMaleBrute_MARGIN,
      }
    },
    // MALE BRUTE TRAPPED
    '@keyframes TrappedMaleBrute': {
      '100%': {
        left: -(TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN)
          * (TrappedMaleBrute_FRAMES - 1),
      }
    },
    // MALE BRUTE IDDLE INVERTED
    '@keyframes TrappedMaleBruteInverted': {
      '100%': {
        left: -TrappedMaleBrute_MARGIN,
      }
    },
  }}
  />
);

export default fightAnimations;