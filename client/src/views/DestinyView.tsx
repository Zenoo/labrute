import { BruteWithBodyColors, DestinyBranch, skills, weapons } from '@labrute/core';
import { BruteStat, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { Box, Paper } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import BoxBg from '../components/BoxBg';
import BruteComponent from '../components/Brute/Body/BruteComponent';
import SkillTooltip from '../components/Brute/SkillTooltip';
import WeaponTooltip from '../components/Brute/WeaponTooltip';
import Page from '../components/Page';
import Text from '../components/Text';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';

const DestinyView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();

  // Brute
  const bruteParams = useMemo(() => ({ name: bruteName || '', include: { body: true, colors: true } }), [bruteName]);
  const { data: _brute } = useStateAsync(null, Server.Brute.get, bruteParams);

  const brute = _brute as BruteWithBodyColors;

  // Destiny choices
  const { data: tree } = useStateAsync(null, Server.Brute.getDestiny, bruteName || '');

  const renderBranch = (branch: DestinyBranch | null) => branch && (
    <Box
      key={branch.path.join(',')}
      sx={{
        display: 'inline-flex',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          flexBasis: '50%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: 129,
            width: 255,
            mx: 'auto',
            mb: 2,
          }}
        >
          <BoxBg
            src="/images/level-up/box.png"
            sx={{
              pt: 5,
              height: 129,
            }}
          >
            {/* CHOICE HEADER */}
            <Text caption>
              {/* +3 Skill */}
              {branch.type === 'stats' && !branch.stat2 && `+${branch.stat1Value || ''} ${t('in')}`}
              {/* +2/+1 Skill */}
              {branch.type === 'stats' && branch.stat2 && `+${branch.stat1Value || ''}/+${branch.stat2Value || ''} ${t('in')}`}
              {/* New weapon */}
              {branch.type === 'weapon' && `${t('newWeapon')} :`}
              {/* New skill */}
              {branch.type === 'skill' && `${t('newSkill')} :`}
              {/* New pet */}
              {branch.type === 'pet' && `${t('newPet')} :`}
            </Text>

            {/* CHOICE CONTENT */}
            {/* Single value */}
            {(branch.type === 'skill' ? (
              <SkillTooltip
                skill={skills.find((s) => s.name === branch.skill)}
              >
                <Text h6 bold smallCaps>{t(branch.skill as SkillName)}</Text>
              </SkillTooltip>
            ) : branch.type === 'weapon' ? (
              <WeaponTooltip weapon={weapons
                .find((w) => w.name === branch.weapon)}
              >
                <Text h6 bold smallCaps>{t(branch.weapon as WeaponName)}</Text>
              </WeaponTooltip>
            ) : branch.type === 'pet' ? (
              <Text h6 bold smallCaps>{t(branch.pet as PetName)}</Text>
            ) : !branch.stat2 ? (
              <Text h6 bold smallCaps>{t(branch.stat1 as BruteStat)}</Text>
            ) : (
              <Text h6 bold smallCaps>
                {t(branch.stat1 as BruteStat)} / {t(branch.stat2)}
              </Text>
            ))}
          </BoxBg>
        </Box>
      </Box>
      {renderBranch(branch.LEFT)}
      {renderBranch(branch.RIGHT)}
    </Box>
  );

  return brute && (
    <Page title={`${t('MyBrute')}. ${t('destinyOf')} ${brute.name || ''}`} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mt: 3,
        bgcolor: 'background.paperLight',
        '& .react-transform-wrapper': {
          maxWidth: 1,
          maxHeight: 600,
        }
      }}
      >
        {tree && (
          <TransformWrapper initialScale={0.1} minScale={0.1} centerOnInit>
            <TransformComponent>
              <Box sx={{ textAlign: 'center' }}>
                {/* BRUTE */}
                <BoxBg
                  src="/images/level-up/brute-bg.gif"
                  sx={{
                    height: 182,
                    width: 201,
                    mx: 'auto',
                    mt: 1,
                  }}
                >
                  <BruteComponent
                    brute={brute}
                    inverted
                    sx={{ height: 160, mt: 1 }}
                  />
                </BoxBg>
                {/* CHOICES */}
                <Box sx={{ my: 1, width: 'max-content' }}>
                  {tree && ([tree.LEFT, tree.RIGHT]).map((branch) => renderBranch(branch))}
                </Box>
              </Box>
            </TransformComponent>
          </TransformWrapper>
        )}
      </Paper>
    </Page>
  );
};

export default DestinyView;
