import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleDocument } from '../features/documents';
import { currentDocument } from '../features/documentsSlice';
import DocumentEditor from '../components/DocumentEditor';

function DocumentPage() {
  const { id } = useParams();

  const dispatch = useDispatch<any>();

  const document = useSelector(currentDocument);

  useEffect(() => {
    dispatch(fetchSingleDocument(id));
  }, [dispatch]);

  return (
    <Box display="grid" gridGap={2} gridAutoFlow="row dense">
      <Box display="flex" justifyContent="center">
        <h2>Editar doc</h2>
      </Box>

      <Box display="flex" justifyContent="center">
        {document && <DocumentEditor document={document} />}
      </Box>
    </Box>
  );
}

export default DocumentPage;
