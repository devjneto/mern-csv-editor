import { useDispatch, useSelector } from 'react-redux';
import { getAllDocuments } from '@client/features/documentsSlice';
import { fetchAllDocuments } from '../features/documents';
import { useEffect } from 'react';
import DocumentsTable from './DocumentsTable';

export default function DocumentsList() {
  const dispatch = useDispatch<any>();

  const documents = useSelector(getAllDocuments);

  useEffect(() => {
    dispatch(fetchAllDocuments());
  }, [dispatch]);

  return <DocumentsTable documents={documents} />;
}
