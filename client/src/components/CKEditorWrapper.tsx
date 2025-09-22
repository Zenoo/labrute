import React, { useEffect } from 'react';
import { useTheme } from '@mui/material';

interface CKEditorWrapperProps {
  data: string;
  onChange: (event: any, editor: any) => void;
  config: any;
}

const CKEditorWrapper: React.FC<CKEditorWrapperProps> = ({ data, onChange, config }) => {
  const { palette: { mode } } = useTheme();

  useEffect(() => {
    // Only load CKEditor on the client side
    if (typeof window !== 'undefined') {
      // Add dark theme CSS if needed
      if (mode === 'dark') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/css/ckeditor-dark.css';
        document.head.appendChild(link);
      }
    }
  }, [mode]);

  // Dynamically import and render CKEditor only on client side
  const [CKEditor, setCKEditor] = React.useState<any>(null);
  const [ClassicEditor, setClassicEditor] = React.useState<any>(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      Promise.all([
        import('@ckeditor/ckeditor5-react').then(mod => mod.CKEditor),
        import('@ckeditor/ckeditor5-build-classic')
      ]).then(([CKEditorComponent, ClassicEditorComponent]) => {
        setCKEditor(() => CKEditorComponent);
        setClassicEditor(() => ClassicEditorComponent.default);
      }).catch(error => {
        console.error('Failed to load CKEditor:', error);
      });
    }
  }, []);

  if (!CKEditor || !ClassicEditor) {
    return <div>Loading editor...</div>;
  }

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