import { BruteGetInventoryResponse } from '@labrute/core';
import { InventoryItemType } from '@labrute/prisma';
import { Box, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BruteBodyAndStats from '../components/Brute/BruteBodyAndStats';
import BruteLevelAndXP from '../components/Brute/BruteLevelAndXP';
import Link from '../components/Link';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useBrute } from '../hooks/useBrute';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const itemImage: Record<InventoryItemType, string> = {
  [InventoryItemType.visualReset]: '/images/inventory/color-reset.svg',
  [InventoryItemType.bossTicket]: '/images/inventory/bossTicket.webp',
  [InventoryItemType.nameChange]: '/images/inventory/nameChange.webp',
  [InventoryItemType.favoriteFight]: '/images/inventory/favoriteFight.webp',
};

export const InventoryView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const { brute, owner } = useBrute();
  const navigate = useNavigate();
  const Alert = useAlert();

  const [inventory, setInventory] = useState<BruteGetInventoryResponse>([]);

  // Fetch inventory
  useEffect(() => {
    if (!brute) return;

    Server.Brute.getInventory(brute.name).then((data) => {
      setInventory(data);
    }).catch(catchError(Alert));
  }, [brute, Alert]);

  const triggerItem = useCallback((item: BruteGetInventoryResponse[number]) => () => {
    if (!brute) return;

    switch (item.type) {
      case InventoryItemType.visualReset: {
        // Reset visuals
        navigate(`/${brute.name}/reset-visuals`);
        break;
      }
      case InventoryItemType.nameChange: {
        // Change name
        navigate(`/${brute.name}/change-name`);
        break;
      }
      case InventoryItemType.favoriteFight: {
        // Favorite fight
        Alert.open('info', t('inventory.item.favoriteFight.desc'));
        break;
      }
      default: {
        Alert.open('info', t('inventory.itemNotImplemented'));
        break;
      }
    }
  }, [brute, navigate, Alert, t]);

  return brute && (
    <Page title={t('inventory')} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('inventory')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {owner && (
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Text h4 bold color="secondary" center>{brute.name}</Text>
              <BruteLevelAndXP
                brute={brute}
                textProps={{ h3: false, h5: true, color: 'primary.text', center: true }}
                sx={{ mb: 1, width: 120, mx: 'auto' }}
              />
              <BruteBodyAndStats brute={brute} isMd={isMd} />
              <Box sx={{ textAlign: 'center', mt: 1 }}>
                <Link to={`/${brute.name}/cell`}>
                  <Text bold>{t('backToCell')}</Text>
                </Link>
                {!isMd && (
                  <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/bear.webp`} sx={{ maxWidth: 1 }} />
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={5.6}>
              <Grid container spacing={1}>
                {inventory.map((item) => !!item.count && (
                  <Grid item key={item.id} xs={12} sm={6}>
                    <StyledButton
                      image="/images/arena/brute-bg.webp"
                      imageHover="/images/arena/brute-bg-hover.webp"
                      contrast={false}
                      shadow={false}
                      onClick={triggerItem(item)}
                      sx={{
                        width: 190,
                        height: 102,
                        mx: 'auto',
                      }}
                    >
                      <Box sx={{
                        width: 185,
                        height: 89,
                        p: 0.5,
                        pt: 1,
                        display: 'inline-flex',
                        flexDirection: 'column',
                      }}
                      >
                        <Text bold color="secondary">
                          {t(`inventory.item.${item.type}`)}
                          {item.count > 1 && (
                            <Text component="span" color="primary" italic>
                              {` x${item.count}`}
                            </Text>
                          )}
                        </Text>
                        {itemImage[item.type] && (
                          <Box sx={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          >
                            <Box
                              component="img"
                              src={itemImage[item.type]}
                              sx={{ width: 28 }}
                            />
                          </Box>
                        )}
                      </Box>
                    </StyledButton>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {!isMd && (
              <Grid item xs={12} md={2.4}>
                <Text bold>{t('inventory.desc')}</Text>
                <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/referee.webp`} sx={{ maxWidth: 1 }} />
              </Grid>
            )}
          </Grid>
        )}
      </Paper>
    </Page>
  );
};
