import '../../style/InForm.css';
import NotFound from '../errors/NotFound';
import SelectionList from './SelectionList';

const InForm = ({ products, setProducts, select, setSelect }) => {
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
                            min={new Date().toISOString().split('T')[0]} //today's Date
                            required
                        ></input>
                    </div>
                    <div className="Input_container SelectOption">
                        <label htmlFor="select" className="Input_label">Select</label>
                        <input 
                            id="select" 
                            className="Input_field" 
                            type="text" 
                            name="select" 
                            value={select}
                            onChange={(e) => setSelect(e.target.value)}
                            placeholder="Enter product id or name"
                            required
                        ></input>
                    </div>
                    <div className='Select_container'>
                        {
                            products.length ?
                                <SelectionList 
                                    products={products.filter(product => (product.name).toLowerCase().includes(select.toLowerCase()))}
                                    setSelect={setSelect}
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
                        ></textarea>
                    </div>
                </div>
                <div className='BtnContainer'>
                    <button 
                        type="submit"
                        className="AddBtn"
                    >Add</button>
                    <button className="CancelBtn">Clear</button>
                </div>
            </form>
        </div>
        
    );
}

export default InForm;