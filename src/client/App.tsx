import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { dispatchUploadDocument } from './api/documents';
import './App.css';
import DocumentsList from './components/DocumentList';

function App() {
  const dispatcher = useDispatch<any>();
  const [uploadedFile, setUploadedFile] = useState<string>(null);

  useEffect(() => {
    if (uploadedFile) {
      dispatcher(dispatchUploadDocument(uploadedFile));
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
        setUploadedFile(text as string);
      };
      reader.readAsText(file);
    };
    input.click();
  };

  return (
    <div className="App">
      <h1>Documents</h1>
      <button onClick={uploadButton}>Upload</button>
      <DocumentsList />
    </div>
  );
}

export default App;
