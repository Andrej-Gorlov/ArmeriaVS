import { ChakraProvider } from '@chakra-ui/react';
import ProductsScreen from './screens/ProductsScreen';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<ProductsScreen />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
