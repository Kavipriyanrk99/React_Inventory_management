import '../../style/ProductsTable.css';
import NotFound from '../errors/NotFound';

const ProductsTable = ({ products, setProducts }) => {
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
                                        <td>{product.price}</td>
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