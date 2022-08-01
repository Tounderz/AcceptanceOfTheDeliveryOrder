import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HOME_ROUTE, ORDERS_LIST_ROUTE } from './utils/const';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import OrdersList from './pages/OrdersList';

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar/>
      <Routes>
        <Route exact path={HOME_ROUTE} element={<Home/>}/>
        <Route path={ORDERS_LIST_ROUTE} element={<OrdersList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;