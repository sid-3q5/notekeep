import './App.scss';
import Home from './Component/Home.js';
import Header from './Component/Header.jsx';
import Footer from './Component/Footer.jsx';
import NotFound from './NotFound.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
