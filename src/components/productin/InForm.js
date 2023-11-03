import '../../style/InForm.css';
import NotFound from '../errors/NotFound';
import SelectionList from './SelectionList';

const InForm = ({ products, setProducts, select, setSelect, InOutProduct, setInOutProduct }) => {
    const handleChange = (e) => {
        switch(e.target.name){
            case "in_date":
                setInOutProduct({...InOutProduct, date : e.target.value});
                break;
            
            case "product_select":
                setInOutProduct({...InOutProduct, name : e.target.value});
                break;
            
            case "quans":
                setInOutProduct({...InOutProduct, quantity : e.target.value});
                break;
            
            case "description":
                setInOutProduct({...InOutProduct, description : e.target.value});
                break;
            
            default:
                break;
        }  
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const product = products.find(product => product.name === InOutProduct.name);
        if(!product){
            console.log("Product not found");
        }
        product.in = parseInt(InOutProduct.quantity) + parseInt(product.in);
        product.quantity = parseInt(product.in) - parseInt(product.out);
        product.price = parseFloat(product.buyrate) * parseInt(product.quantity);
        const filteredArray = products.filter(product => product.name !== InOutProduct.name);
        setProducts([...filteredArray, product]);
        setInOutProduct({
            name: '',
            id: '',
            date: new Date().toISOString().split('T')[0],
            quantity: 0,
            description: ''
        });
    }

    const handleClear = () => {
        setInOutProduct({
            name: '',
            id: '',
            date: new Date().toISOString().split('T')[0],
            quantity: 0,
            description: ''
          });
    }

    return(
        <div className='FormContainer'>
            <form className="InForm">
                <h1>Add New</h1>
                <div className="Product-info--form">
                    <div className="Input_container">
                        <label htmlFor="in_date" className="Input_label">Date</label>
                        <input 
                            id="in_date" 
                            className="Input_field" 
                            type="date" 
                            name="in_date" 
                            value={InOutProduct.date}
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
                            value={InOutProduct.name}
                            onChange={handleChange}
                            placeholder="Enter product id or name"
                            required
                        ></input>
                    </div>
                    <div className='Select_container'>
                        {
                            products.length ?
                                <SelectionList 
                                    products={products.filter(product => (product.name).toLowerCase().includes(InOutProduct.name.toLowerCase()))}
                                    InOutProduct={InOutProduct}
                                    setInOutProduct={setInOutProduct}
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
                            value={InOutProduct.quantity}
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
                            value={InOutProduct.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className='BtnContainer'>
                    <button 
                        type="submit"
                        className="AddBtn"
                        onClick={handleAdd}
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