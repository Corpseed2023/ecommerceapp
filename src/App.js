import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';
import SignUpPage from './Login/SignUpPage';
import NoPageFound from './Components/NoPageFound';
import DashBoardPage from './Main/DashBoardPage';
import ProductPage from './Main/ProductPage';
import SingleProductPage from './Main/SingleProductPage';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<MainPage />}>
  <Route path="/" element={<ProductPage />} />
  <Route path="/product/:id" element={<SingleProductPage />} />
  </Route>
  <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<NoPageFound />} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;
