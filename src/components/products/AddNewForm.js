import '../../style/AddNewForm.css';
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';

const AddNewForm = ({ AddNewBtnDisplay, setAddNewBtnDisplay, product, setProduct }) => {
    return( 
        <div className='FormBackground' style={{display: AddNewBtnDisplay}}>
            <form className="AddNewForm" onSubmit={(e) => {e.preventDefault()}}>
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
                        ></input>
                    </div>
                    <div className="Input_container">
                        <label htmlFor="description" className="Input_label">Description</label>
                        <textarea 
                            id="description" 
                            className="Input_field" 
                            name="message" 
                            rows="2" 
                            placeholder="Enter about product" 
                            maxLength={120}
                        ></textarea>
                    </div>
                </div>
                <div className='BtnContainer'>
                    <button 
                        className="AddBtn"
                    >Add</button>
                    <button className="CancelBtn" onClick={(e) => {AddNewBtnDisplay === "none" ? setAddNewBtnDisplay("flex") : setAddNewBtnDisplay("none")}}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddNewForm;