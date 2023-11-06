import { Route, Routes } from 'react-router-dom';
import './style/Main.css';
import Layout from './components/Layout';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/products/Products';
import Transactions from './components/transactions/Transactions';
import Productin from './components/productin/Productin';
import Productout from './components/productout/Productout';


const Main = ({ products, setProducts, AddNewBtnDisplay, setAddNewBtnDisplay, product, setProduct, search, setSearch, totalPrice, totalStock, InProduct, setInProduct, OutProduct, setOutProduct, TransactionHist, setTransactionHist }) => {
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
                <Route 
                    path='transactions' 
                    element={
                        <Transactions 
                            products={products}
                            setProducts={setProducts}
                            TransactionHist={TransactionHist}
                            setTransactionHist={setTransactionHist}
                        />} 
                />
                <Route 
                    path='productin' 
                    element={
                        <Productin 
                            products={products} 
                            setProducts={setProducts}
                            search={search}
                            setSearch={setSearch}
                            InProduct={InProduct}
                            setInProduct={setInProduct}
                        />} 
                />
                <Route 
                    path='productout' 
                    element={
                        <Productout 
                            products={products} 
                            setProducts={setProducts}
                            search={search}
                            setSearch={setSearch}
                            OutProduct={OutProduct}
                            setOutProduct={setOutProduct}
                        />} 
                    />
            </Route>
        </Routes>
    );
}

export default Main;