import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';
import SignupPage from './Login/SignupPage';
import NoPageFound from './Components/NoPageFound';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<MainPage />} />
  <Route path="/signup" element={<SignupPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<NoPageFound />} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;
