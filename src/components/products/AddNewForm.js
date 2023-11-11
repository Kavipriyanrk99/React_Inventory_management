import '../../style/AddNewForm.css';
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';
import ApiRequest from '../../utils/ApiRequest';

const AddNewForm = ({ products, setProducts, AddNewBtnDisplay, setAddNewBtnDisplay, product, setProduct, TransactionHist, setTransactionHist }) => {
    const handleChange = (e) => {
        switch(e.target.name){
            case "product_name":
                setProduct({...product, name : e.target.value, date : new Date().toISOString().split('T')[0]});
                break;
            
            case "product_id":
                setProduct({...product, id : e.target.value});
                break;
            
            case "buy_rate":
                setProduct({...product, buyrate : e.target.value});
                break;
            
            case "initial_quans":
                setProduct({...product, in : e.target.value});
                break;
            
            case "description":
                setProduct({...product, description : e.target.value});
                break;
            
            default:
                break;
        }  
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = {
            id: parseInt(product.id),
            name: product.name,
            buyrate: parseFloat(product.buyrate),
            in: parseInt(product.in),
            out: 0,
            quantity: parseInt(product.in),
            price: parseFloat(product.buyrate) * parseInt(product.in),
            description: product.description
        }
        setProducts([...products, newProduct]);
        setAddNewBtnDisplay("none");
        
        await ApiRequest.handleItems("http://127.0.0.1:5000/products", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
            });

        const newTransaction = {
            transaction_id: TransactionHist.length > 0 ? TransactionHist[TransactionHist.length - 1].transaction_id + 1 : 0,
            id: parseInt(product.id),
            name: product.name,
            date: product.date,
            in: parseInt(product.in),
            out: 0,
            quantity: parseInt(product.in),
            description: product.description
        }
        setTransactionHist([...TransactionHist, newTransaction]);
        await ApiRequest.handleItems("http://127.0.0.1:5000/transactions", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newTransaction)
        });

        setProduct({
            name: '',
            id: 0,
            buyrate: 0,
            in: 0,
            description: ''
        });
    }

    const handleClear = () => {
        setProduct({
            name: '',
            id: 0,
            buyrate: 0,
            in: 0,
            description: ''
        });
    }

    return( 
        <div className='FormBackground' style={{display: AddNewBtnDisplay}}>
            <form className="AddNewForm" onSubmit={handleSubmit}>
                <AiFillCloseCircle className='CloseIcon' onClick={(e) => {AddNewBtnDisplay === "none" ? setAddNewBtnDisplay("flex") : setAddNewBtnDisplay("none")}}></AiFillCloseCircle>
                <h1>New Product</h1>
                <div className="Product-info--form">
                    <div className="Input_container">
                        <label htmlFor="product_name" className="Input_label">Product Name</label>
                        <input 
                            id="product_name" 
                            className="Input_field" 
                            type="text" 
                            name="product_name" 
                            placeholder="Enter product name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        ></input>
                    </div>
                    <div className="Input_container">
                        <label htmlFor="product_id" className="Input_label">Product Id</label>
                        <input 
                            id="product_id" 
                            className="Input_field" 
                            type="text" 
                            name="product_id" 
                            placeholder="Enter product id"
                            value={product.id}
                            onChange={handleChange}
                            required
                        ></input>
                    </div>
                    <div className="Input_container">
                        <label htmlFor="buy_rate" className="Input_label">Buy Rate</label>
                        <input 
                            id="buy_rate" 
                            className="Input_field" 
                            type="number" 
                            name="buy_rate" 
                            placeholder="Enter Buy rate"
                            value={product.buyrate}
                            onChange={handleChange}
                            required
                        ></input>
                    </div>
                    <div className="Input_container">
                        <label htmlFor="initial_quans" className="Input_label">Initial Quantity</label>
                        <input 
                            id="initial_quans" 
                            className="Input_field" 
                            type="number" 
                            name="initial_quans" 
                            placeholder="Enter quantity"
                            value={product.in}
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
                            value={product.description}
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

export default AddNewForm;