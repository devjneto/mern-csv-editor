import { useDispatch, useSelector } from 'react-redux';
import { getAllDocuments } from '@client/features/documentsSlice';
import { fetchAllDocuments } from '../api/documents';
import { useEffect } from 'react';

export default function DocumentsList() {
  const dispatch = useDispatch<any>();

  const documents = useSelector(getAllDocuments);

  useEffect(() => {
    dispatch(fetchAllDocuments());
  }, [dispatch]);

  return (
    <div>
      <ul>{JSON.stringify(documents)}</ul>
    </div>
  );
}
