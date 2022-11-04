export const API_URL = 'http://localhost:3001/';

export const getDocuments = async (id?: string) => {
  const response = await fetch(`${API_URL}documents/${id || ''}`);
  const data = await response.json();
  return data;
};

export const uploadDocument = async (documentFromCsv) => {
  const response = await fetch(`${API_URL}documents`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      document: documentFromCsv.text,
      name: documentFromCsv.filename,
    }),
  });
  const data = await response.json();
  return data;
};

export const saveDocumentUpdates = async (document) => {
  const response = await fetch(`${API_URL}documents/${document.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      document: document.id,
      changes: document.changes,
    }),
  });
  const data = await response.json();
  return {
    data,
    status: response.status,
  };
}