import { Box, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import Link from '../../components/Link';
import Page from '../../components/Page';
import StyledInput from '../../components/StyledInput';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FantasyButton from '../../components/FantasyButton';

const ClanPostView = () => {
  const { t } = useTranslation();
  const { bruteName, id, tid } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const changeContent = (_: unknown, editor: ClassicEditor) => {
    setContent(editor.getData());
  };

  const save = () => {
    if (!id || !bruteName || !tid) return;

    // Check if title is not empty if creating a new thread
    if (!title && tid === '0') {
      Alert.open('error', t('missingTitle'));
      return;
    }

    // Check if content is not empty
    if (!content) {
      Alert.open('error', t('missingContent'));
      return;
    }

    if (tid === '0') {
      Server.Clan.createThread(bruteName || '', +id, title, content).then(() => {
        Alert.open('success', t('threadCreated'));
        navigate(`/${bruteName}/clan/${id}/forum`);
      }).catch(catchError(Alert));
    } else {
      Server.Clan.createPost(bruteName || '', +tid, content).then(() => {
        Alert.open('success', t('replyPosted'));
        navigate(`/${bruteName}/clan/${id}/thread/${tid}`);
      }).catch(catchError(Alert));
    }
  };

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>
          {tid === '0' ? t('startThread') : t('reply')}
        </Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        >
          <Link to={`/${bruteName || ''}/cell`}>
            <Text bold smallCaps>{t('goBackToYourCell')}</Text>
          </Link>
          <Link to={`/${bruteName || ''}/clan/ranking`}>
            <Text bold smallCaps>{t('ranking')}</Text>
          </Link>
          <Link to={`/${bruteName || ''}/clan/${id || 0}`}>
            <Text bold smallCaps>{t('myClan')}</Text>
          </Link>
        </Box>
        {tid === '0' && (
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 1,
            my: 1,
          }}
          >
            <Text h4 bold smallCaps>{t('title')}</Text>
            <StyledInput
              onChange={changeTitle}
              value={title}
            />
          </Box>
        )}
        <CKEditor
          editor={ClassicEditor}
          onChange={changeContent}
        />
        <FantasyButton color="success" onClick={save} sx={{ mt: 1 }}>{t('send')}</FantasyButton>
      </Paper>
    </Page>
  );
};

export default ClanPostView;
