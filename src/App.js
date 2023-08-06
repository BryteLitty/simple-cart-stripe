import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { CartProvider } from './cartContext';
import Store from './pages/Store';
import Cancel from './pages/Cancel';
import Success from './pages/Success';


function App() {
  return (
    <div>
      <CartProvider>
        <Container>
          <NavbarComponent />
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path='/success' element={<Success /> } />
              <Route path='/cancel' element={<Cancel /> } />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
      
    </div>
  );
}

export default App;
