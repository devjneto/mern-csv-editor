import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Link, Stack } from '@chakra-ui/react';
import DocumentsList from '../components/DocumentList';
import { uploadDocument } from '../features/documents';

type UploadedFile = {
  filename: string;
  text: string;
};

function Index() {
  const dispatcher = useDispatch<any>();
  const [uploadedFile, setUploadedFile] = useState<UploadedFile>(null);

  useEffect(() => {
    if (uploadedFile) {
      dispatcher(uploadDocument(uploadedFile));
    }
  }, [uploadedFile]);

  const uploadButton = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = (e.target as FileReader).result;
        const filename = file.name;
        setUploadedFile({ filename, text: text as string });
      };
      reader.readAsText(file);
    };
    input.click();
  };

  return (
    <Box display="grid" gridGap={2} gridAutoFlow="row dense">
      <Box display="grid" gridGap={2} gridAutoFlow="row dense">
        <Stack spacing={4} direction="row-reverse">
          <Button onClick={uploadButton} colorScheme="blue" size="sm">
            Upload CSV
          </Button>
          <Link href={'/'}>
            <Button colorScheme="gray" size="sm">
              Refresh
            </Button>
          </Link>
        </Stack>

        <DocumentsList />
      </Box>
    </Box>
  );
}

export default Index;
