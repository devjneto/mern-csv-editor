import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Box, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';

import { Provider } from 'react-redux';
import { store } from './store';
import Index from './pages/Index';
import DocumentPage from './pages/Document';
import Alerts from './components/Alerts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ChakraProvider>
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="silver.200" area={'header'}>
          <Box
            as="h1"
            fontSize="xl"
            display="flex"
            padding={4}
            justifyContent="center"
            justifyItems="stretch"
          >
            MERN Stack - CSV Uploader
          </Box>
        </GridItem>
        <GridItem pl="2" bg="silver.300" area={'main'}>
          <Alerts />

          <Box display="flex" padding={4} justifyContent="center" justifyItems="stretch">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/doc/:id" element={<DocumentPage />} />
              </Routes>
            </BrowserRouter>
          </Box>
        </GridItem>
        <GridItem pl="2" bg="silver.300" area={'footer'}>
          <Box display="flex" padding={4} justifyContent="center" justifyItems="stretch">
            <p>2022 - Joao Neto - All rights reserved | MERN Stack</p>
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  </Provider>,
);
