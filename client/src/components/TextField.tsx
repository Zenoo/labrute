import { styled, TextField as TextFieldComponent } from '@mui/material';

const TextField = styled(TextFieldComponent)(({ theme }) => ({
  '&.MuiFormControl-root ': {
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiInputLabel-root': {
    fontFamily: '"Architects Daughter", cursive',
  },
  '& label.Mui-focused': {
    color: theme.palette.text.primary,
  },
  '& .MuiInputLabel-shrink': {
    boxShadow: `0 0 0 1.5px ${theme.palette.border.inner},
    0 0 0 4px ${theme.palette.border.main},
    0 0 0 5.5px ${theme.palette.border.outer}`,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '4px',
    padding: '0 4px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
      boxShadow: `0 0 0 1.5px ${theme.palette.border.inner},
      0 0 0 4px ${theme.palette.border.main},
      0 0 0 5.5px ${theme.palette.border.outer},
      3px 3px 1px 5px ${theme.palette.border.shadow}`,
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
}));

export default TextField;