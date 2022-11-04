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

  return <>{document?._id && <DocumentEditor document={document} />}</>;
}

export default DocumentPage;
