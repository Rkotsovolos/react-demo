
import 'bootstrap';
import './App.css';

import Navbar from './Navbar.js';
import Todo from './Todo';
import StockExchange from './StockExchange'
import AddressSearch from './AddressSearch';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div class="App">
      <h1>PCG Technology Labs</h1>
      <Navbar/>
      
      <Routes>
        <Route exact path="/Todo" element={<Todo/>} />
        <Route path="/AddressSearch" element={<AddressSearch />} />
        <Route path="/StockExchange" element={<StockExchange />} />
      </Routes>
    </div>
  );
}

export default App;
