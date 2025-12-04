import { Backdrop, Box, Checkbox, FormControl, InputLabel, MenuItem, Modal, Paper, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../FantasyButton';
import Text from '../Text';
import { useAlert } from '../../hooks/useAlert';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

type Member = {
  id: string;
  name: string;
};

type Role = {
  id: string;
  name: string;
};

type RoleAssignmentModalProps = {
  open: boolean;
  onClose: () => void;
  clanId: string;
  role: Role | null;
  members: Member[];
  onAssigned: () => void;
};

const RoleAssignmentModal: React.FC<RoleAssignmentModalProps> = ({
  open,
  onClose,
  clanId,
  role,
  members,
  onAssigned,
}) => {
  const { t } = useTranslation();
  const Alert = useAlert();

  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  useEffect(() => {
    if (open) {
      setSelectedMembers([]);
    }
  }, [open, members]);

  const handleAssign = () => {
    if (selectedMembers.length === 0 || !role) {
      Alert.open('error', t('pleaseSelectMember'));
      return;
    }

    // Assign role to all selected members
    Server.Clan.assignRoles(clanId, role.id, selectedMembers)
      .then(() => {
        Alert.open('success', t('rolesAssigned', { count: selectedMembers.length }));
        setSelectedMembers([]);
        onAssigned();
        onClose();
      })
      .catch(catchError(Alert));
  };
  const handleSelectionMembers = (selected: string[]) => (members
    .filter((m) => selected.includes(m.id))
    .map((m) => m.name)
    .join(', ') || t('selectMembers')
  );

  if (!role) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            bgcolor: 'rgba(0, 0, 0, 0.8)',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: 500,
          width: '90%',
        }}
      >
        <Paper sx={{ p: 3 }}>
          <Text h3 bold color="secondary" sx={{ mb: 2 }}>
            {t('assignRole')}: {role.name}
          </Text>

          {members.length === 0 ? (
            <Text color="text.secondary" sx={{ mb: 3 }}>
              {t('noMembersAvailable')}
            </Text>
          ) : (
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>{t('selectMembers')}</InputLabel>
              <Select
                multiple
                value={selectedMembers}
                onChange={(e) => setSelectedMembers(e.target.value as string[])}
                label={t('selectMembers')}
                renderValue={handleSelectionMembers}
                MenuProps={{
                  sx: {
                    zIndex: 1500,
                  },
                }}
              >
                {members.map((member) => (
                  <MenuItem key={member.id} value={member.id}>
                    <Checkbox checked={selectedMembers.includes(member.id)} />
                    {member.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <FantasyButton color="secondary" onClick={onClose}>
              {t('cancel')}
            </FantasyButton>
            <FantasyButton color="success" onClick={handleAssign}>
              {t('assign')}
            </FantasyButton>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default RoleAssignmentModal;
