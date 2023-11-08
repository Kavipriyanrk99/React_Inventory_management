import { useState, useEffect } from 'react';
import ApiRequest from './utils/ApiRequest';
import Header from './Header';
import Main from './Main';
import './style/App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [AddNewBtnDisplay, setAddNewBtnDisplay] = useState("none");
  const [product, setProduct] = useState({
    name: '',
    id: 0,
    buyrate: 0,
    in: 0,
    description: ''
  });
  const [search, setSearch] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [InProduct, setInProduct] = useState({
    name: '',
    id: 0,
    date: new Date().toISOString().split('T')[0],
    quantity: 0,
    description: ''
  });
  const [OutProduct, setOutProduct] = useState({
    name: '',
    id: 0,
    date: new Date().toISOString().split('T')[0],
    quantity: 0,
    description: ''
  });
  const [TransactionHist, setTransactionHist] = useState([]);
  const [ProductFetchError, setProductFetchError] = useState(null);
  const [IsProductLoading, setIsProductLoading]   = useState(true);
  const [TransactionFetchError, setTransactionFetchError] = useState(null);
  const [IsTransactionLoading, setIsTransactionLoading]   = useState(true);
  
  useEffect(() => {
    setTimeout(async () => {
      let response = await ApiRequest.fetchItems("http://127.0.0.1:5000/products");
      if(response.error != null){
        setProductFetchError(response.error);
        setIsProductLoading(false);
      }else{
        setProducts(response.data);
        setProductFetchError(null);
        setIsProductLoading(false);
      }

      response = await ApiRequest.fetchItems("http://127.0.0.1:5000/transactions");
      if(response.error != null){
        setTransactionFetchError(response.error);
        setIsTransactionLoading(false);
      }else{
        setTransactionHist(response.data);
        setTransactionFetchError(null);
        setIsTransactionLoading(false);
      }
    }, 2000);
  }, []);

  useEffect(() => {
    let price = 0;
    let stock = 0;
    for(let index = 0; index < products.length; index++){
      price += parseFloat(products[index].price);
      stock += parseInt(products[index].quantity);
    }
    setTotalPrice(price);
    setTotalStock(stock);
  }, [products]);
  

  return (
    <div className="App">
      <Header />
      <Main
        ProductFetchError={ProductFetchError}
        setProductFetchError={setProductFetchError}
        IsProductLoading={IsProductLoading}
        setIsProductLoading={setIsProductLoading}
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
        InProduct={InProduct}
        setInProduct={setInProduct}
        OutProduct={OutProduct}
        setOutProduct={setOutProduct}
        TransactionHist={TransactionHist}
        setTransactionHist={setTransactionHist}
      />
    </div>
  );
}

export default App;
