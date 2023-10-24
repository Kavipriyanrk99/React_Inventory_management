import { useState } from 'react';
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
    name: "",
    id: "",
    buyrate: "",
    initial_quans: "",
    description: ""
  });

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
      />
    </div>
  );
}

export default App;
