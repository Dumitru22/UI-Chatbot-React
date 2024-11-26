import './App.css';
import Header from './components/ui-components/HeaderUi/HeaderUi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeMenu from './components/components/HomeMenu/HomeMenu';
import StockMenu from './components/components/StockMenu/StockMenu';
import StockValue from './components/components/StockValue/StockValue';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMenu></HomeMenu>} />
          <Route path="/stock" element={<StockMenu></StockMenu>} />
          <Route path="/stockValue" element={<StockValue></StockValue>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

