import {
  Paper, Stack, TextField,
  Tooltip
} from "@mui/material";
import { Page } from "../../components/Page";
import { Text } from "../../components/Text";
import React, {
  useCallback, useEffect, useState
} from "react";
import { catchError } from "../../utils/catchError";
import { BrutesListBannedWordsResponse } from "@labrute/core";
import { useAlert } from "../../hooks/useAlert";
import { useTranslation } from "react-i18next";
import { useServer } from "../../hooks/useServer";
import { FantasyButton } from "../../components/FantasyButton";
import { Delete } from "@mui/icons-material";

export const BannedWordsAdminView = () => {
  const { t } = useTranslation('admin');
  const Alert = useAlert();
  const Server = useServer();

  const [bannedWords, setBannedWords] = useState<BrutesListBannedWordsResponse>([]);
  const [filteredBannedWords, setFilteredBannedWords] = useState<BrutesListBannedWordsResponse>([]);
  const [search, setSearch] = useState('');

  const fetchBannedWords = useCallback(() => {
    Server.Brute.listBannedWords()
      .then((words) => {
        words.sort((a, b) => a.word.localeCompare(b.word));
        setBannedWords(words);
        setFilteredBannedWords(words);
      })
      .catch(catchError(Alert));
  }, [Alert, Server.Brute]);

  useEffect(() => {
    fetchBannedWords();
  }, [fetchBannedWords]);

  useEffect(() => {
    if (!search) {
      setFilteredBannedWords(bannedWords);
      return;
    }

    const filtered = bannedWords
      .filter((word) => word.word.toLowerCase().includes(search.toLowerCase()));
    setFilteredBannedWords(filtered);
  }, [search, bannedWords]);

  const banWord = () => {
    if (!search) return;

    Server.Brute.addBannedWord({ word: search })
      .then(() => {
        Alert.open('success', 'Word banned successfully');
        fetchBannedWords();
      })
      .catch(catchError(Alert));
  };

  const unbanWord = (id: string) => {
    Server.Brute.removeBannedWord({ id })
      .then(() => {
        Alert.open('success', 'Word unbanned successfully');
        fetchBannedWords();
      })
      .catch(catchError(Alert));
  }

  return (
    <Page title={t('adminPanel')} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Text bold h3 smallCaps color="secondary">Banned words</Text>
          <TextField
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FantasyButton color="error" onClick={banWord}>
            Ban word
          </FantasyButton>
          <Text bold h4 smallCaps color="secondary">Filtered banned words</Text>
          <Stack spacing={1}>
            {filteredBannedWords.map((word) => (
              <Stack key={word.id} direction="row" spacing={1} alignItems="center">
                <Text>{word.word}</Text>
                <Tooltip title="Unban word">
                  <Delete onClick={() => unbanWord(word.id)} sx={{ cursor: 'pointer' }} />
                </Tooltip>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Page>
  );
}
