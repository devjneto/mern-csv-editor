export const API_URL = 'http://localhost:3001/';

export const getDocuments = async () => {
  const response = await fetch(`${API_URL}documents`);
  const data = await response.json();
  return data;
};

export const uploadDocument = async (documentFromCsv) => {
  const response = await fetch(`${API_URL}documents`, {
    method: 'POST',
    headers: {},
    body: JSON.stringify({ document: documentFromCsv }),
  });
  const data = await response.json();
  return data;
};
