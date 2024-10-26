import { Box, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CellPets from '../components/Cell/CellPets';
import CellSkills from '../components/Cell/CellSkills';
import CellWeapons from '../components/Cell/CellWeapons';
import { useNavigate } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import Link from '../components/Link';
import { useBrute } from '../hooks/useBrute';
import BruteLevelAndXP from '../components/Brute/BruteLevelAndXP';
import BruteBodyAndStats from '../components/Brute/BruteBodyAndStats';
import FantasyButton from '../components/FantasyButton';
import { PetName, SkillName, WeaponName } from '@labrute/prisma';
import { useConfirm } from '../hooks/useConfirm';
import { useAlert } from '../hooks/useAlert';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

/**
 * AscendView component
 */
const AscendView = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { brute } = useBrute();
  const navigate = useNavigate();
  const Confirm = useConfirm();
  const Alert = useAlert();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const [selectedPerk, setSelectedPerk] = useState<WeaponName | SkillName | PetName | null>(null);

  const [selectedPerkType, setSelectedPerkType] = useState<'weapon' | 'skill'| 'pet' | null>(null);

  // Check if redirect
  useEffect(() => {
    let redirect = false;

    if (!brute) {
      navigate('/');
      return;
    }

    if (!brute.canRankUpSince) {
      redirect = true;
    } else if (brute.ranking !== 0) {
      redirect = true;
    }

    if (redirect) {
      navigate(`/${brute.name}/cell`);
    }
  }, [brute, navigate]);

  const onWeaponClick = (weapon: WeaponName) => {
    if (brute?.ascendedWeapons.includes(weapon)) {
      return;
    }
    setSelectedPerk(weapon);
    setSelectedPerkType('weapon');
  };

  const onSkillClick = (skill: SkillName) => {
    if (brute?.ascendedSkills.includes(skill)) {
      return;
    }
    setSelectedPerk(skill);
    setSelectedPerkType('skill');
  };

  const getNextAvailableDogAscendLevel = () => {
    if (!brute) return -1;

    if (brute.ascendedPets.includes('dog3')) {
      return -1; // Already ascended all dog levels
    }

    let maxAscendedDogLevel = 0;
    if (brute.ascendedPets.includes('dog2')) {
      maxAscendedDogLevel = 2;
    } else if (brute.ascendedPets.includes('dog1')) {
      maxAscendedDogLevel = 1;
    }
    let maxOwnedDogLevel = 0;
    if (brute.pets.includes('dog3')) {
      maxOwnedDogLevel = 3;
    } else if (brute.pets.includes('dog2')) {
      maxOwnedDogLevel = 2;
    } else if (brute.pets.includes('dog1')) {
      maxOwnedDogLevel = 1;
    }

    if (maxAscendedDogLevel < maxOwnedDogLevel) {
      return maxAscendedDogLevel + 1;
    }
    return -1;
  };

  const onPetClick = (pet: PetName) => {
    if (pet === 'dog1' || pet === 'dog2' || pet === 'dog3') {
      const nextAvailableDogAscendLevel = getNextAvailableDogAscendLevel();
      if (nextAvailableDogAscendLevel === -1) {
        return;
      }

      if (nextAvailableDogAscendLevel === 1) {
        setSelectedPerk('dog1');
      } else if (nextAvailableDogAscendLevel === 2) {
        setSelectedPerk('dog2');
      } else if (nextAvailableDogAscendLevel === 3) {
        setSelectedPerk('dog3');
      }
    } else {
      if (brute?.ascendedPets.includes(pet)) {
        return;
      }
      setSelectedPerk(pet);
    }
    setSelectedPerkType('pet');
  };

  const getAscendWithLabel = useCallback(() => {
    const getSelectedPerkLabel = () => {
      if (!selectedPerk) {
        return '';
      }
      if (selectedPerk === 'dog1') {
        return t('ascendWith.firstDog');
      }
      if (selectedPerk === 'dog2') {
        return t('ascendWith.secondDog');
      }
      if (selectedPerk === 'dog3') {
        return t('ascendWith.thirdDog');
      }
      return t(selectedPerk);
    };

    const getSelectedPerkTypeLabel = () => {
      if (!selectedPerkType) {
        return '';
      }
      return t(`perkType.${selectedPerkType}`);
    };

    if (!selectedPerk || !selectedPerkType) {
      return '';
    }
    if (selectedPerk === 'dog1' || selectedPerk === 'dog2' || selectedPerk === 'dog3') {
      return t('youWillAscendWithDog', { one_or_a_second_pet_dog: t(getSelectedPerkLabel()) });
    }
    return t('youWillAscendWith', { perkName: t(getSelectedPerkLabel()), perkType: getSelectedPerkTypeLabel() });
  }, [selectedPerk, selectedPerkType, t]);

  const ascend = useCallback(() => {
    if (!brute) {
      return;
    }
    if (!selectedPerkType || !selectedPerk) {
      return;
    }

    Confirm.open(t('ascendConfirmShort'), `${t('ascendConfirm')} ${getAscendWithLabel()}`, () => {
      Server.Brute.ascend(brute.name, { [selectedPerkType]: selectedPerk })
        .then(() => {
          window.location.reload();
        })
        .catch(catchError(Alert));
    });
  }, [Alert, Confirm, brute, getAscendWithLabel, selectedPerk, selectedPerkType, t]);

  return brute && (
    <Page title={`${brute.name} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('ascension')}</Text>
        <Text bold color="secondary">{t('youAreAboutToAscend')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container>
          {isMd && (
            <>
              <Grid item xs={12} md={3.4}>
                <Text bold fontSize="82%">{t('ascensionExplanationText')}</Text>
                <Text bold fontSize="85%">{t('rankingPrioritizeAscensions')}</Text>
              </Grid>
              <Grid item xs={12} md={1} sx={{ height: 10 }} />
            </>
          )}
          <Grid item xs={12} md={4}>
            <Text h4 bold color="secondary" center>{brute.name}</Text>
            <BruteLevelAndXP
              brute={brute}
              textProps={{ h3: false, h5: true, color: 'primary.text', center: true }}
              sx={{ mb: 1, width: 120, mx: 'auto' }}
            />
            <BruteBodyAndStats brute={brute} isMd={isMd} centered />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Link to={`/${brute.name}/cell`}>
                <Text bold>{t('backToCell')}</Text>
              </Link>
            </Box>
          </Grid>
          {isMd && (
            <Grid item xs={12} md={1} sx={{ height: 10 }} />
          )}
          <Grid item xs={12} md={4.6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
              <Box sx={{ width: 315, marginLeft: 1 }}>
                {/* WEAPONS */}
                <CellWeapons selectCallback={onWeaponClick} hoverSelectAscend selectedWeapon={(selectedPerkType === 'weapon' && selectedPerk as WeaponName | null) || null} />
                {/* SKILLS */}
                <CellSkills selectCallback={onSkillClick} hoverSelectAscend selectedSkill={(selectedPerkType === 'skill' && selectedPerk as SkillName | null) || null} />
                {/* PETS */}
                <CellPets selectCallback={onPetClick} sx={{ mt: 2 }} hoverSelectAscend selectedPet={(selectedPerkType === 'pet' && selectedPerk as PetName | null) || null} />
              </Box>
            </Grid>
            {/* Show currently selected type and perk */}
            <Box sx={{ display: 'flex', width: 315, justifyContent: 'center', mt: 1 }}>
              {selectedPerk && selectedPerkType && (
                <Text bold>{getAscendWithLabel()}</Text>
              )}
              {(!selectedPerk || !selectedPerkType) && (
                <Text bold>{t('youMustSelectToAscend')}</Text>
              )}
            </Box>
            <Box sx={{ width: 315, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', mt: 1 }}>
              <FantasyButton color="warning" onClick={ascend} sx={{ mb: 1 }} disabled={!selectedPerk || !selectedPerkType}>
                {t('ascend')}
              </FantasyButton>
            </Box>
          </Grid>
          {!isMd && (
            <Grid item xs={12} md={3.4}>
              <Text bold fontSize="82%">{t('ascensionExplanationText')}</Text>
              <Text bold fontSize="85%">{t('rankingPrioritizeAscensions')}</Text>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Page>
  );
};

export default AscendView;
