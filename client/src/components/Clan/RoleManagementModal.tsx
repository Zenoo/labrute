import { Backdrop, Box, Checkbox, FormControlLabel, FormGroup, Modal, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../FantasyButton';
import Text from '../Text';
import { useAlert } from '../../hooks/useAlert';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

import { ClanGetRolesResponse, ClanPermission } from '@labrute/core';

type RoleManagementModalProps = {
  open: boolean;
  onClose: () => void;
  clanId: string;
  role?: ClanGetRolesResponse[number] | null;
  onRoleCreated?: () => void;
};

const RoleManagementModal: React.FC<RoleManagementModalProps> = ({
  open,
  onClose,
  clanId,
  role = null,
  onRoleCreated,
}) => {
  const { t } = useTranslation();
  const Alert = useAlert();

  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState<ClanPermission[]>([]);

  // Load role data when editing
  useEffect(() => {
    if (open && role) {
      setRoleName(role.name);
      setPermissions(role.permissions);
    } else if (open && !role) {
      setRoleName('');
      setPermissions([]);
    }
  }, [open, role]);

  const handlePermissionChange = (permission: ClanPermission) => {
    setPermissions((prev) => (prev.includes(permission)
      ? prev.filter((p) => p !== permission)
      : [...prev, permission]));
  };

  const handleSaveRole = () => {
    if (!roleName.trim()) {
      Alert.open('error', t('pleaseEnterRoleName'));
      return;
    }

    const roleData = {
      name: roleName,
      permissions,
    };

    const promise = role
      ? Server.Clan.updateRole(clanId, role.id, roleData)
      : Server.Clan.createRole(clanId, roleData);

    promise.then(() => {
      Alert.open('success', role ? t('roleUpdatedSuccessfully') : t('roleCreatedSuccessfully'));
      setRoleName('');
      setPermissions([]);
      onRoleCreated?.();
      onClose();
    }).catch(catchError(Alert));
  };

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
          width: '90%',
          maxWidth: 600,
          maxHeight: '90vh',
          outline: 'none',
        }}
      >
        <Paper
          sx={{
            maxHeight: '90vh',
            overflow: 'auto',
            p: 3,
          }}
        >
          <Text h3 bold color="secondary" sx={{ mb: 2 }}>
            {role ? t('editRole') : t('createNewRole')}
          </Text>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label={t('roleName')}
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.paperLight',
                },
              }}
            />
          </Box>

          <Text h4 bold color="secondary" sx={{ mb: 2 }}>
            {t('permissions')}
          </Text>

          <FormGroup sx={{ mb: 3 }}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canAcceptJoinRequests)}
                  onChange={() => handlePermissionChange(ClanPermission.canAcceptJoinRequests)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canAcceptJoinRequests')}</Text>
              )}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canRejectJoinRequests)}
                  onChange={() => handlePermissionChange(ClanPermission.canRejectJoinRequests)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canRejectJoinRequests')}</Text>
              )}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canRemoveMembers)}
                  onChange={() => handlePermissionChange(ClanPermission.canRemoveMembers)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canRemoveMembers')}</Text>
              )}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canSelectWarFighters)}
                  onChange={() => handlePermissionChange(ClanPermission.canSelectWarFighters)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canSelectWarFighters')}</Text>
              )}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canPinThreads)}
                  onChange={() => handlePermissionChange(ClanPermission.canPinThreads)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canPinThreads')}</Text>
              )}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canUnpinThreads)}
                  onChange={() => handlePermissionChange(ClanPermission.canUnpinThreads)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canUnpinThreads')}</Text>
              )}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canDeletePosts)}
                  onChange={() => handlePermissionChange(ClanPermission.canDeletePosts)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canDeletePosts')}</Text>
              )}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canDeleteThreads)}
                  onChange={() => handlePermissionChange(ClanPermission.canDeleteThreads)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canDeleteThreads')}</Text>
              )}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canCreateRoles)}
                  onChange={() => handlePermissionChange(ClanPermission.canCreateRoles)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canCreateRoles')}</Text>
              )}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={permissions.includes(ClanPermission.canChangeRoles)}
                  onChange={() => handlePermissionChange(ClanPermission.canChangeRoles)}
                  sx={{ color: 'secondary.main' }}
                />
              )}
              label={(
                <Text>{t('canChangeRoles')}</Text>
              )}
            />
          </FormGroup>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <FantasyButton color="secondary" onClick={onClose}>
              {t('cancel')}
            </FantasyButton>
            <FantasyButton color="success" onClick={handleSaveRole}>
              {role ? t('update') : t('create')}
            </FantasyButton>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default RoleManagementModal;
