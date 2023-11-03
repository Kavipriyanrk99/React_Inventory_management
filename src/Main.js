import { Route, Routes } from 'react-router-dom';
import './style/Main.css';
import Layout from './components/Layout';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/products/Products';
import Transactions from './components/transactions/Transactions';
import Productin from './components/productin/Productin';
import Productout from './components/productout/Productout';


const Main = ({ products, setProducts, AddNewBtnDisplay, setAddNewBtnDisplay, product, setProduct, search, setSearch, totalPrice, totalStock, select, setSelect, InOutProduct, setInOutProduct }) => {
    return(
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route 
                    path='products' 
                    element={
                        <Products 
                            products={products} 
                            setProducts={setProducts} 
                            AddNewBtnDisplay={AddNewBtnDisplay} 
                            setAddNewBtnDisplay={setAddNewBtnDisplay} 
                            product={product} 
                            setProduct={setProduct}
                            search={search}
                            setSearch={setSearch}
                            totalPrice={totalPrice}
                            totalStock={totalStock}
                        />}
                />
                <Route path='transactions' element={<Transactions />} />
                <Route 
                    path='productin' 
                    element={
                        <Productin 
                            products={products} 
                            setProducts={setProducts}
                            search={search}
                            setSearch={setSearch}
                            select={select}
                            setSelect={setSelect}
                            InOutProduct={InOutProduct}
                            setInOutProduct={setInOutProduct}
                        />} 
                />
                <Route path='productout' element={<Productout />} />
            </Route>
        </Routes>
    );
}

export default Main;