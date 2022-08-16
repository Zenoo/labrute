import { Weapon } from '@eternaltwin/labrute-core/types';
import { Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, TooltipProps } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import Text from '../Text.js';

export interface WeaponTooltipProps extends Omit<TooltipProps, 'title'> {
  weapon?: Weapon;
}

const WeaponTooltip = ({
  weapon,
  children,
  ...rest
}: WeaponTooltipProps) => (
  <Tooltip
    {...rest}
    title={weapon ? (
      <>
        <Text bold h5>{t(weapon.name)}</Text>
        <Box
          component="img"
          src={`/images/weapons/${weapon.name}.png`}
          sx={{ display: 'block', my: 1 }}
        />
        <Divider />
        <TableContainer
          sx={{
            width: 'auto',
            p: 1,
            '& td, & th': {
              borderColor: 'border.shadow',
            },
          }}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><Text bold>{t('stat')}</Text></TableCell>
                <TableCell align="right"><Text bold>{t('value')}</Text></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">{t('types')}</TableCell>
                <TableCell align="right">{weapon.types.map((type) => t(type)).join(', ')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">{t('odds')}</TableCell>
                <TableCell align="right">{weapon.odds}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">{t('interval')}</TableCell>
                <TableCell align="right">{weapon.tempo * 100}</TableCell>
              </TableRow>
              {!!weapon.counter && (
                <TableRow>
                  <TableCell component="th" scope="row">{t('counter')}</TableCell>
                  <TableCell align="right">
                    {weapon.counter > 0 && '+'}
                    {Math.round(weapon.counter * 100)}
                    %
                  </TableCell>
                </TableRow>
              )}
              {!!weapon.evasion && (
                <TableRow>
                  <TableCell component="th" scope="row">{t('evasion')}</TableCell>
                  <TableCell align="right">
                    {weapon.evasion > 0 && '+'}
                    {Math.round(weapon.evasion * 100)}
                    %
                  </TableCell>
                </TableRow>
              )}
              {!!weapon.block && (
                <TableRow>
                  <TableCell component="th" scope="row">{t('block')}</TableCell>
                  <TableCell align="right">
                    {weapon.block > 0 && '+'}
                    {Math.round(weapon.block * 100)}
                    %
                  </TableCell>
                </TableRow>
              )}
              {!!weapon.accuracy && (
                <TableRow>
                  <TableCell component="th" scope="row">{t('accuracy')}</TableCell>
                  <TableCell align="right">
                    {weapon.accuracy > 0 && '+'}
                    {Math.round(weapon.accuracy * 100)}
                    %
                  </TableCell>
                </TableRow>
              )}
              {!!weapon.disarm && (
                <TableRow>
                  <TableCell component="th" scope="row">{t('disarm')}</TableCell>
                  <TableCell align="right">
                    {weapon.disarm > 0 && '+'}
                    {Math.round(weapon.disarm * 100)}
                    %
                  </TableCell>
                </TableRow>
              )}
              {!!weapon.combo && (
                <TableRow>
                  <TableCell component="th" scope="row">{t('combo')}</TableCell>
                  <TableCell align="right">
                    {weapon.combo > 0 && '+'}
                    {Math.round(weapon.combo * 100)}
                    %
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell component="th" scope="row">{t('damage')}</TableCell>
                <TableCell align="right">{weapon.damage}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">{t('drawChance')}</TableCell>
                <TableCell align="right">{weapon.toss}</TableCell>
              </TableRow>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{t('reach')}</TableCell>
                <TableCell align="right">{weapon.reach}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    ) : ''}
    componentsProps={{
      tooltip: { sx: { minHeight: 68 } },
      popper: { sx: { width: 250 } },
    }}
  >
    {children}
  </Tooltip>
);

export default WeaponTooltip;