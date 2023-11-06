import '../../style/SelectionList.css';
import NotFound from '../errors/NotFound';

const SelectionList = ({ products, InOutProduct, setInOutProduct }) => {
    return(
        <ul className='SelectionList'>
            {
                products.length ?
                    products.map((product) => (
                        <li 
                            key={product.id}
                            onClick={(e) => setInOutProduct({...InOutProduct, name : product.name, id: product.id})}
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