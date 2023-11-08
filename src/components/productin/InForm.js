import '../../style/InForm.css';
import NotFound from '../errors/NotFound';
import SelectionList from './SelectionList';

const InForm = ({ products, setProducts, InProduct, setInProduct, TransactionHist, setTransactionHist }) => {
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
            case "in_date":
                setInProduct({...InProduct, date : e.target.value});
                break;
            
            case "product_select":
                setInProduct({...InProduct, name : e.target.value, id: getIdFromName(e.target.value.toLowerCase())});
                break;
            
            case "quans":
                setInProduct({...InProduct, quantity : e.target.value});
                break;
            
            case "description":
                setInProduct({...InProduct, description : e.target.value});
                break;
            
            default:
                break;
        }  
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const product = products.find(product => product.name === InProduct.name);
        if(!product){
            console.log("Product not found");
        }
        product.in = parseInt(InProduct.quantity) + parseInt(product.in);
        product.quantity = parseInt(product.in) - parseInt(product.out);
        product.price = parseFloat(product.buyrate) * parseInt(product.quantity);
        const filteredArray = products.filter(product => product.name !== InProduct.name);
        setProducts([...filteredArray, product]);
        setInProduct({
            name: '',
            id: 0,
            date: new Date().toISOString().split('T')[0],
            quantity: 0,
            description: ''
        });

        const newTransaction = {
            transaction_id: TransactionHist.length > 0 ? TransactionHist[TransactionHist.length - 1].transaction_id + 1 : 0,
            id: parseInt(InProduct.id),
            date: InProduct.date,
            in: parseInt(InProduct.quantity),
            out: 0
        }
        setTransactionHist([...TransactionHist, newTransaction]);
    }

    const handleClear = () => {
        setInProduct({
            name: '',
            id: 0,
            date: new Date().toISOString().split('T')[0],
            quantity: 0,
            description: ''
          });
    }

    return(
        <div className='FormContainer'>
            <form className="InForm" onSubmit={handleAdd}>
                <h1>Add Product</h1>
                <div className="Product-info--form">
                    <div className="Input_container">
                        <label htmlFor="in_date" className="Input_label">Date</label>
                        <input 
                            id="in_date" 
                            className="Input_field" 
                            type="date" 
                            name="in_date" 
                            value={InProduct.date}
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
                            value={InProduct.name}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            required
                        ></input>
                    </div>
                    <div className='Select_container'>
                        {
                            products.length ?
                                <SelectionList 
                                    products={products.filter(product => (product.name).toLowerCase().includes(InProduct.name.toLowerCase()))}
                                    InOutProduct={InProduct}
                                    setInOutProduct={setInProduct}
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
                            value={InProduct.quantity}
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
                            value={InProduct.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className='BtnContainer'>
                    <button 
                        type="submit"
                        className="AddBtn"
                    >Add</button>
                    <button 
                        className="ClearBtn"
                        onClick={handleClear}
                    >Clear</button>
                </div>
            </form>
        </div>
        
    );
}

export default InForm;


//TODO: After adding product - successful animation