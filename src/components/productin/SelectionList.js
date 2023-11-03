import '../../style/SelectionList.css';
import NotFound from '../errors/NotFound';

const SelectionList = ({ products, setSelect }) => {
    return(
        <ul className='SelectionList'>
            {
                products.length ?
                    products.map((product) => (
                        <li 
                            key={product.id}
                            onClick={(e) => setSelect(product.name)}
                        >
                            {product.name}
                        </li>
                    )) :
                    <NotFound />
            }
        </ul>
    );
}

export default SelectionList;