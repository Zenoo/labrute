import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClanGetThreadResponse } from '@labrute/core';
import { Box, Paper, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams, useLocation } from 'react-router';
import FantasyButton from '../../components/FantasyButton';
import Link from '../../components/Link';
import Page from '../../components/Page';
import StyledInput from '../../components/StyledInput';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';
import { Brute, ClanPost } from '@labrute/prisma';

const ClanPostView = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const action = queryParams.get('action');
  const { bruteName, id, tid } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();
  const { palette: { mode } } = useTheme();

  const [title, setTitle] = useState('');
  const [post, setPost] = useState<(ClanPost & {
    author: Brute,
  })>();
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
      Server.Clan.createThread(bruteName || '', id, title, content).then(() => {
        Alert.open('success', t('threadCreated'));
        navigate(`/${bruteName}/clan/${id}/forum`);
      }).catch(catchError(Alert));
    } else if (!action) {
      Server.Clan.createPost(bruteName || '', tid, content).then(() => {
        Alert.open('success', t('replyPosted'));
        navigate(`/${bruteName}/clan/${id}/thread/${tid}`);
      }).catch(catchError(Alert));
    } else if (post && action && action === 'update') {
      Server.Clan.updateThread(bruteName || '', id, title, content, tid, post.id).then(() => {
        Alert.open('success', t('replyPosted'));
        navigate(`/${bruteName}/clan/${id}/thread/${tid}`);
      }).catch(catchError(Alert));
    }
  };

  useEffect(() => {
    if (mode !== 'dark') return () => { };

    const { head } = document;
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '/css/ckeditor-dark.css';

    head.appendChild(link);

    return () => { head.removeChild(link); };
  }, [mode]);

  useEffect(() => {
    if (bruteName && id && tid && action && action === 'update' && tid !== '0') {
      Server.Clan.getThread(bruteName, id, tid, 1)
        .then((thread: ClanGetThreadResponse) => {
          const firstPost = thread.posts.sort(
            (postA, postB) => new Date(postA.date).getTime() - new Date(postB.date).getTime()
          )[0];
          if (firstPost) {
            setPost(firstPost);
          }
          setTitle(thread.title);
          setContent(firstPost ? firstPost.message : 'DD');
        })
        .catch(catchError(Alert));
    }
  }, [Alert, action, bruteName, id, mode, tid]);
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
        {(tid === '0' || action !== 'update') && (
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
          data={content}
          onChange={changeContent}
          config={{
            // Doesn't work since there is a commonJS issue
            // plugins: [Image],
            // image: {
            //   insert: {
            //     integrations: ['url']
            //   }
            // },
            toolbar: [
              'undo',
              'redo',
              '|',
              'heading',
              '|',
              'bold',
              'italic',
              '|',
              'link',
              // 'insertImage',
              'insertTable',
              'blockQuote',
              'mediaEmbed',
              '|',
              'bulletedList',
              'numberedList',
              'outdent',
              'indent',
            ],
          }}
        />
        <FantasyButton color="success" onClick={save} sx={{ mt: 1 }}>{t('send')}</FantasyButton>
      </Paper>
    </Page>
  );
};

export default ClanPostView;
