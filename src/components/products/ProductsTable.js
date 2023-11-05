import '../../style/ProductsTable.css';
import {AiFillDelete} from '@react-icons/all-files/ai/AiFillDelete';
import NotFound from '../errors/NotFound';

const ProductsTable = ({ products, setProducts, handleDelete }) => {

    return(
        products.length ? 
            <table className="ProductsTable">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Buy Rate</th>
                        <th>In</th>
                        <th>Out</th>
                        <th>Stock Quantity</th>
                        <th>Stock Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.buyrate}</td>
                                        <td>{product.in}</td>
                                        <td>{product.out}</td>
                                        <td>{product.quantity}</td>
                                        <td className='Stock_price'>
                                            <div>
                                                {product.price}
                                            </div>
                                            <button 
                                                id={product.id}
                                                className='DelBtn'
                                                onClick={handleDelete}
                                            >
                                                <AiFillDelete
                                                    id={product.id}
                                                    className='DeleteIcon'
                                                ></AiFillDelete>
                                                Delete
                                            </button>
                                        </td>
                                    </tr> 
                                ))
                    }
                </tbody>
            </table> :
            <NotFound
                    msg="Products"
            />
    );
}

export default ProductsTable;


//TODO: Add Delete button for each product in table 