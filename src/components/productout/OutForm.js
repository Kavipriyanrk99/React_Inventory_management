import '../../style/OutForm.css';
import NotFound from '../errors/NotFound';
import SelectionList from '../productin/SelectionList';

const OutForm = ({ products, setProducts, OutProduct, setOutProduct, TransactionHist, setTransactionHist }) => {
    const getIdFromName = (name) => {
        const allProducts = products;
        const product = allProducts.find((product) => product.name === name);
        if(product){
            return product.id;
        }

        return "Invalid";
    }

    const handleChange = (e) => {
        switch(e.target.name){
            case "out_date":
                setOutProduct({...OutProduct, date : e.target.value});
                break;
            
            case "product_select":
                setOutProduct({...OutProduct, name : e.target.value, id: getIdFromName(e.target.value.toLowerCase())});
                break;
            
            case "quans":
                setOutProduct({...OutProduct, quantity : e.target.value});
                break;
            
            case "description":
                setOutProduct({...OutProduct, description : e.target.value});
                break;
            
            default:
                break;
        }  
    }

    const handleRemove = (e) => {
        e.preventDefault();
        const product = products.find(product => product.name === OutProduct.name);
        if(!product){
            console.log("Product not found");
        }
        product.out = parseInt(OutProduct.quantity) + parseInt(product.out);
        product.quantity = parseInt(product.in) - parseInt(product.out);
        product.price = parseFloat(product.buyrate) * parseInt(product.quantity);
        const filteredArray = products.filter(product => product.name !== OutProduct.name);
        setProducts([...filteredArray, product]);
        setOutProduct({
            name: '',
            id: '',
            date: new Date().toISOString().split('T')[0],
            quantity: 0,
            description: ''
        });

        const newTransaction = {
            transaction_id: TransactionHist.length > 0 ? TransactionHist[TransactionHist.length - 1].transaction_id + 1 : 0,
            id: parseInt(OutProduct.id),
            date: OutProduct.date,
            in: 0,
            out: parseInt(OutProduct.quantity)
        }
        setTransactionHist([...TransactionHist, newTransaction]);
    }

    const handleClear = () => {
        setOutProduct({
            name: '',
            id: '',
            date: new Date().toISOString().split('T')[0],
            quantity: 0,
            description: ''
          });
    }

    return(
        <div className='FormContainer'>
            <form className="OutForm" onSubmit={handleRemove}>
                <h1>Remove Product</h1>
                <div className="Product-info--form">
                    <div className="Input_container">
                        <label htmlFor="out_date" className="Input_label">Date</label>
                        <input 
                            id="out_date" 
                            className="Input_field" 
                            type="date" 
                            name="out_date" 
                            value={OutProduct.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]} //today's Date
                            required
                        ></input>
                    </div>
                    <div className="Input_container SelectOption">
                        <label htmlFor="product_select" className="Input_label">Select</label>
                        <input 
                            id="product_select" 
                            className="Input_field" 
                            type="text" 
                            name="product_select" 
                            value={OutProduct.name}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            required
                        ></input>
                    </div>
                    <div className='Select_container'>
                        {
                            products.length ?
                                <SelectionList 
                                    products={products.filter(product => (product.name).toLowerCase().includes(OutProduct.name.toLowerCase()))}
                                    InOutProduct={OutProduct}
                                    setInOutProduct={setOutProduct}
                                /> :
                                <NotFound />
                        }
                    </div>
                    <div className="Input_container">
                        <label htmlFor="quans" className="Input_label">Quantity</label>
                        <input 
                            id="quans" 
                            className="Input_field" 
                            type="number" 
                            name="quans" 
                            placeholder="Enter quantity"
                            value={OutProduct.quantity}
                            onChange={handleChange}
                            required
                        ></input>
                    </div>
                    <div className="Input_container">
                        <label htmlFor="description" className="Input_label">Description</label>
                        <textarea 
                            id="description" 
                            className="Input_field" 
                            name="description" 
                            rows="2" 
                            placeholder="Enter about product" 
                            maxLength={120}
                            value={OutProduct.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className='BtnContainer'>
                    <button 
                        type="submit"
                        className="RemoveBtn"
                    >Remove</button>
                    <button 
                        className="ClearBtn"
                        onClick={handleClear}
                    >Clear</button>
                </div>
            </form>
        </div>
        
    );
}

export default OutForm;


//TODO: After deleting product - successful animation