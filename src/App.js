import './App.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
