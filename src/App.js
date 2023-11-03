import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import './style/App.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "laptop",
      buyrate: 50000,
      in: 5,
      out: 0,
      quantity: 5,
      price: 250000
    },
    {
      id: 2,
      name: "soap",
      buyrate: 50,
      in: 5,
      out: 0,
      quantity: 5,
      price: 250
    },
    {
      id: 3,
      name: "shampoo",
      buyrate: 1,
      in: 5,
      out: 0,
      quantity: 5,
      price: 5
    }
  ]);
  const [AddNewBtnDisplay, setAddNewBtnDisplay] = useState("none");
  const [product, setProduct] = useState({
    name: '',
    id: '',
    buyrate: 0,
    in: 0,
    description: ''
  });
  const [search, setSearch] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [select, setSelect] = useState("");
  const [InOutProduct, setInOutProduct] = useState({
    name: '',
    id: '',
    date: new Date().toISOString().split('T')[0],
    quantity: 0,
    description: ''
  });

  useEffect(() => {
    let price = 0;
    let stock = 0;
    for(let index = 0; index < products.length; index++){
      price += parseFloat(products[index].price);
      stock += parseInt(products[index].quantity);
    }
    setTotalPrice(price);
    setTotalStock(stock);
  }, [products])

  return (
    <div className="App">
      <Header />
      <Main
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
        select={select}
        setSelect={setSelect}
        InOutProduct={InOutProduct}
        setInOutProduct={setInOutProduct}
      />
    </div>
  );
}

export default App;
