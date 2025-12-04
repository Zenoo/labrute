import { Backdrop, Box, Checkbox, FormControlLabel, FormGroup, Modal, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../FantasyButton';
import Text from '../Text';
import { useAlert } from '../../hooks/useAlert';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

import { ClanGetRolesResponse, ClanPermission } from '@labrute/core';

interface RoleManagementModalProps {
  open: boolean;
  onClose: () => void;
  clanId: string;
  role?: ClanGetRolesResponse[number] | null;
  onRoleCreated?: () => void;
}

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
  const [permissions, setPermissions] = useState({
    canAcceptJoinRequests: false,
    canRejectJoinRequests: false,
    canRemoveMembers: false,
    canSelectWarFighters: false,
    canPinThreads: false,
    canUnpinThreads: false,
    canDeletePosts: false,
    canDeleteThreads: false,
    canCreateRoles: false,
    canChangeRoles: false,
  });

  // Load role data when editing
  useEffect(() => {
    if (open && role) {
      setRoleName(role.name);
      setPermissions({
        canAcceptJoinRequests: role.permissions.includes(ClanPermission.canAcceptJoinRequests),
        canRejectJoinRequests: role.permissions.includes(ClanPermission.canRejectJoinRequests),
        canRemoveMembers: role.permissions.includes(ClanPermission.canRemoveMembers),
        canSelectWarFighters: role.permissions.includes(ClanPermission.canSelectWarFighters),
        canPinThreads: role.permissions.includes(ClanPermission.canPinThreads),
        canUnpinThreads: role.permissions.includes(ClanPermission.canUnpinThreads),
        canDeletePosts: role.permissions.includes(ClanPermission.canDeletePosts),
        canDeleteThreads: role.permissions.includes(ClanPermission.canDeleteThreads),
        canCreateRoles: role.permissions.includes(ClanPermission.canCreateRoles),
        canChangeRoles: role.permissions.includes(ClanPermission.canChangeRoles),
      });
    } else if (open && !role) {
      setRoleName('');
      setPermissions({
        canAcceptJoinRequests: false,
        canRejectJoinRequests: false,
        canRemoveMembers: false,
        canSelectWarFighters: false,
        canPinThreads: false,
        canUnpinThreads: false,
        canDeletePosts: false,
        canDeleteThreads: false,
        canCreateRoles: false,
        canChangeRoles: false,
      });
    }
  }, [open, role]);

  const handlePermissionChange = (permission: keyof typeof permissions) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  const handleSaveRole = () => {
    if (!roleName.trim()) {
      Alert.open('error', t('pleaseEnterRoleName'));
      return;
    }

    const permissionsArray = (Object.keys(permissions) as ClanPermission[]).filter(
      (key) => permissions[key as keyof typeof permissions],
    );

    const roleData = {
      name: roleName,
      permissions: permissionsArray,
    };

    const promise = role
      ? Server.Clan.updateRole(clanId, role.id, roleData)
      : Server.Clan.createRole(clanId, roleData);

    promise.then(() => {
      Alert.open('success', role ? t('roleUpdatedSuccessfully') : t('roleCreatedSuccessfully'));
      setRoleName('');
      setPermissions({
        canAcceptJoinRequests: false,
        canRejectJoinRequests: false,
        canRemoveMembers: false,
        canSelectWarFighters: false,
        canPinThreads: false,
        canUnpinThreads: false,
        canDeletePosts: false,
        canDeleteThreads: false,
        canCreateRoles: false,
        canChangeRoles: false,
      });
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
                  checked={permissions.canAcceptJoinRequests}
                  onChange={() => handlePermissionChange('canAcceptJoinRequests')}
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
                  checked={permissions.canRejectJoinRequests}
                  onChange={() => handlePermissionChange('canRejectJoinRequests')}
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
                  checked={permissions.canRemoveMembers}
                  onChange={() => handlePermissionChange('canRemoveMembers')}
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
                  checked={permissions.canSelectWarFighters}
                  onChange={() => handlePermissionChange('canSelectWarFighters')}
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
                  checked={permissions.canPinThreads}
                  onChange={() => handlePermissionChange('canPinThreads')}
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
                  checked={permissions.canUnpinThreads}
                  onChange={() => handlePermissionChange('canUnpinThreads')}
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
                  checked={permissions.canDeletePosts}
                  onChange={() => handlePermissionChange('canDeletePosts')}
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
                  checked={permissions.canDeleteThreads}
                  onChange={() => handlePermissionChange('canDeleteThreads')}
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
                  checked={permissions.canCreateRoles}
                  onChange={() => handlePermissionChange('canCreateRoles')}
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
                  checked={permissions.canChangeRoles}
                  onChange={() => handlePermissionChange('canChangeRoles')}
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
