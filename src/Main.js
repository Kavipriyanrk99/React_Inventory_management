import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './style/Main.css';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Transactions from './components/Transactions';
import Productin from './components/Productin';
import Productout from './components/Productout';


const Main = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path='products' element={<Products />} />
                <Route path='transactions' element={<Transactions />} />
                <Route path='productin' element={<Productin />} />
                <Route path='productout' element={<Productout />} />
            </Route>
        </Routes>
    );
}

export default Main;