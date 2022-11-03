import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { Provider } from 'react-redux';
import { store } from './store';
import Index from './pages/Index';
import DocumentPage from './pages/Document';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doc/:id" element={<DocumentPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
);
