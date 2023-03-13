import { BruteWithBodyColors, DestinyBranch, skills, weapons } from '@labrute/core';
import { BruteStat, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { QuestionMark } from '@mui/icons-material';
import { Box, Paper, SxProps } from '@mui/material';
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

const styles: Record<string, SxProps> = {
  ul: {
    pt: 2,
    position: 'relative',
    transition: 'all 0.5s',
    '& ul:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      borderLeft: '1px solid #000',
      width: 0,
      height: 16,
    },
  },
  li: {
    float: 'left',
    textAlign: 'center',
    position: 'relative',
    pt: 2,
    pb: 0,
    px: 1,
    transition: 'all 0.5s',
    listStyleType: 'none',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: '50%',
      borderTop: '1px solid #000',
      width: 0.5,
      height: 16,
    },
    '&:after': {
      right: 'auto',
      left: '50%',
      borderLeft: '1px solid #000',
    },
    '&:only-child:after, &:only-child:before': {
      display: 'none',
    },
    '&:only-child': {
      pt: 0,
    },
    '&:first-of-type:before, &:last-child:after': {
      border: 'none',
    },
    '&:last-child:before': {
      borderRight: '1px solid #000',
      borderRadius: '0 5px 0 0',
    },
    '&:first-of-type:after': {
      borderRadius: '5px 0 0 0',
    },
  },
  aside: {
    display: 'inline-block',
    borderRadius: '5px',
    transition: 'all 0.5s',
    '&:hover, &:hover+ul li aside h6, &:hover+ul li aside span, &:hover+ul li aside svg': {
      color: 'error.main',
    },
    '&:hover+ul li::after, &:hover+ul li::before, &:hover+ul::before, &:hover+ul ul::before': {
      borderColor: 'error.main',
    },
  },
};

const DestinyView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();

  // Brute
  const bruteParams = useMemo(() => ({ name: bruteName || '', include: { body: true, colors: true } }), [bruteName]);
  const { data: _brute } = useStateAsync(null, Server.Brute.get, bruteParams);

  const brute = _brute as BruteWithBodyColors;

  // Destiny choices
  const { data: tree } = useStateAsync(null, Server.Brute.getDestiny, bruteName || '');

  const renderBranch = (branch: DestinyBranch | null) => (
    <Box
      key={branch?.path.join(',')}
      component="li"
      sx={styles.li}
    >
      <Box component="aside" sx={styles.aside}>
        <BoxBg
          src="/images/level-up/box.png"
          sx={{
            pt: 5,
            height: 129,
            width: 255,
          }}
        >
          {branch ? (
            <>
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
            </>
          ) : (
            <QuestionMark sx={{ fontSize: '50px' }} />
          )}
        </BoxBg>
      </Box>
      {branch && (
        <Box component="ul" sx={styles.ul}>
          {renderBranch(branch.LEFT)}
          {renderBranch(branch.RIGHT)}
        </Box>
      )}
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
              <Box
                component="ul"
                sx={{
                  ...styles.ul,
                  width: 'max-content',
                }}
              >
                <Box component="li" sx={styles.li}>
                  <Box component="aside" sx={styles.aside}>
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
                  </Box>
                  {/* CHOICES */}
                  <Box component="ul" sx={styles.ul}>
                    {tree && ([tree.LEFT, tree.RIGHT]).map((branch) => renderBranch(branch))}
                  </Box>
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
