import { Brute, Clan } from '@labrute/prisma';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link, { LinkProps } from '../Link';
import StyledButton from '../StyledButton';

export interface CellClanProps extends LinkProps {
  brute: Pick<Brute, 'name'> & {
    clan: Pick<Clan, 'id' | 'name'> | null;
  };
}

const CellClan = ({
  brute,
  sx,
  ...rest
}: CellClanProps) => {
  const { t } = useTranslation();

  return (
    <Link
      to={brute.clan ? `/${brute.name}/clan/${brute.clan.id}` : `/${brute.name}/clan/ranking`}
      sx={{
        display: 'inline-block',
        m: '0 auto',
        mt: 1,
        ...sx,
      }}
      {...rest}
    >
      <StyledButton
        image="/images/button.gif"
        imageHover="/images/button-hover.gif"
        shadow={false}
        contrast={false}
        sx={{
          fontVariant: 'small-caps',
          height: 56,
          width: 246,
        }}
      >
        {brute.clan ? `${t('clan')} ${brute.clan.name}` : t('joinAClan')}
      </StyledButton>
    </Link>
  );
};

export default CellClan;
