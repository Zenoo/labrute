import { Backdrop, Box, Chip, IconButton, Modal, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material';
import { Delete, Edit, PersonAdd } from '@mui/icons-material';
import { ClanGetRolesResponse, hasPermission } from '@labrute/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../FantasyButton';
import Text from '../Text';
import { useAlert } from '../../hooks/useAlert';
import { useConfirm } from '../../hooks/useConfirm';
import Server from '../../utils/Server';
import { catchError } from '../../utils/catchError';
import { Clan, ClanPermission } from '@labrute/prisma';
import { useBrute } from '../../hooks/useBrute';

type Role = ClanGetRolesResponse[number];

type RoleListViewProps = {
  clan: Pick<Clan, 'id' | 'masterId'>;
  open: boolean;
  onClose: () => void;
  clanId: string;
  onEditRole: (role: Role | null) => void;
  onAssignRole: (role: Role) => void;
};

const RoleListView: React.FC<RoleListViewProps> = ({
  clan,
  open,
  onClose,
  clanId,
  onEditRole,
  onAssignRole,
}) => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const Confirm = useConfirm();
  const { brute } = useBrute();

  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);

  const loadRoles = useCallback(() => {
    setLoading(true);
    Server.Clan.getRoles(clanId)
      .then((data) => {
        setRoles(data);
      })
      .catch(catchError(Alert))
      .finally(() => setLoading(false));
  }, [clanId, Alert]);

  useEffect(() => {
    if (open) {
      loadRoles();
    }
  }, [open, loadRoles]);

  const handleDeleteRole = (role: Role) => {
    Confirm.open(
      t('deleteRole'),
      t('confirmDeleteRole', { name: role.name }),
      () => {
        Server.Clan.deleteRole(clanId, role.id)
          .then(() => {
            Alert.open('success', t('roleDeleted'));
            loadRoles();
          })
          .catch(catchError(Alert));
      }
    );
  };

  const getPermissionCount = (role: Role) => role.permissions?.length ?? 0;

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
          maxWidth: 800,
          width: '90%',
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
            {t('manageRoles')}
          </Text>

          {loading ? (
            <Text center>{t('loading')}</Text>
          ) : roles.length === 0 ? (
            <Text center color="text.secondary">{t('noRolesYet')}</Text>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><Text bold>{t('roleName')}</Text></TableCell>
                  <TableCell><Text bold>{t('permissions')}</Text></TableCell>
                  <TableCell><Text bold>{t('members')}</Text></TableCell>
                  <TableCell><Text bold>{t('actions')}</Text></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roles.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell>
                      <Text bold color="secondary">{role.name}</Text>
                    </TableCell>
                    <TableCell>
                      <Tooltip title={role.permissions?.map((p) => t(p)).join(', ') || ''}>
                        <Chip
                          label={`${getPermissionCount(role)} ${t('permissions')}`}
                          size="small"
                          color="primary"
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Text>{role.memberCount ?? 0}</Text>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {hasPermission(brute, clan, ClanPermission.canChangeRoles) && (
                          <Tooltip title={t('assignRole')}>
                            <IconButton
                              size="small"
                              onClick={() => onAssignRole(role)}
                              color="primary"
                            >
                              <PersonAdd />
                            </IconButton>
                          </Tooltip>
                        )}
                        {hasPermission(brute, clan, ClanPermission.canChangeRoles) && (
                          <Tooltip title={t('editRole')}>
                            <IconButton
                              size="small"
                              onClick={() => onEditRole(role)}
                              color="secondary"
                            >
                              <Edit />
                            </IconButton>
                          </Tooltip>
                        )}
                        {brute?.id === clan.masterId && (
                          <Tooltip title={t('deleteRole')}>
                            <IconButton
                              size="small"
                              onClick={() => handleDeleteRole(role)}
                              color="error"
                            >
                              <Delete />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            {hasPermission(brute, clan, ClanPermission.canCreateRoles) && (
              <FantasyButton color="success" onClick={() => onEditRole(null)}>
                {t('createNewRole')}
              </FantasyButton>
            )}
            <FantasyButton color="secondary" onClick={onClose}>
              {t('close')}
            </FantasyButton>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default RoleListView;
