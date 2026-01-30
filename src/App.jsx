import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoinDetails from './pages/CoinDetails'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {}
      <nav className="bg-blue-600 p-4 text-white shadow-md">
        <div className="container mx-auto font-bold text-xl">
          🚀 CryptoWatch 
        </div>
      </nav>

      {}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;