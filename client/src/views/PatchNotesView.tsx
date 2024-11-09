import { LAST_RELEASE, releases } from '@labrute/core';
import { Circle } from '@mui/icons-material';
import { ImageList, ImageListItem, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import Text from '../components/Text';

const PatchNotesView = () => {
  const { t } = useTranslation();

  const [displayedReleases, setDisplayedReleases] = useState([LAST_RELEASE]);

  // Show 5 more releases
  const showMoreReleases = () => {
    setDisplayedReleases((prev) => releases.slice(0, prev.length + 5));
  };

  return (
    <Page title={`${t('MyBrute')} - ${t('patchNotes')}`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('patchNotes')}</Text>
      </Paper>
      {displayedReleases.map((release) => (
        <Paper key={release.version} sx={{ bgcolor: 'background.paperLight', my: 3 }}>
          <Text h4 bold upperCase>v{release.version} <Text component="span" italic upperCase>{moment(release.date).format('DD MMMM YYYY')}</Text></Text>
          {!!release.features.length && (
            <>
              <Text h5 bold upperCase sx={{ mt: 1 }}>{t('features')}</Text>
              <List dense sx={{ p: 0 }}>
                {release.features.map((feature) => (
                  <ListItem key={feature} sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                      <Circle sx={{ fontSize: '6px' }} />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </>
          )}
          {!!release.fixes.length && (
            <>
              <Text h5 bold upperCase sx={{ mt: 1 }}>{t('fixes')}</Text>
              <List dense sx={{ p: 0 }}>
                {release.fixes.map((fix) => (
                  <ListItem key={fix} sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                      <Circle sx={{ fontSize: '6px' }} />
                    </ListItemIcon>
                    <ListItemText primary={fix} />
                  </ListItem>
                ))}
              </List>
            </>
          )}
          {!!release.attachments?.length && (
            <ImageList sx={{ p: 2 }}>
              {release.attachments.map((item) => (
                <ImageListItem
                  key={item}
                  onClick={() => window.open(`/images/releases/${item}`)}
                  sx={{
                    cursor: 'pointer',
                    boxShadow: 3
                  }}
                >
                  {item.endsWith('.mp4') ? (
                    <video autoPlay loop muted>
                      <source src={`/images/releases/${item}`} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={`/images/releases/${item}`}
                      alt={item}
                      loading="lazy"
                    />
                  )}
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Paper>
      ))}
      {displayedReleases.length < releases.length && (
        <FantasyButton
          color="success"
          onClick={showMoreReleases}
          sx={{ mx: 'auto' }}
        >
          {t('showMore')}
        </FantasyButton>
      )}
    </Page>
  );
};

export default PatchNotesView;
