import React, { useEffect } from 'react';
import { useTheme } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorWrapper: React.FC<
  Pick<
    React.ComponentProps<typeof CKEditor<ClassicEditor>>,
    'data' | 'onChange' | 'config'
  >
> = ({ data, onChange, config }) => {
  const { palette: { mode } } = useTheme();

  useEffect(() => {
    // Add dark theme CSS if needed
    if (mode === 'dark') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = '/css/ckeditor-dark.css';
      document.head.appendChild(link);
    }
  }, [mode]);

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={onChange}
      config={config}
    />
  );
};

export default CKEditorWrapper;
