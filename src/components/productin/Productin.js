import '../../style/Productin.css';
import InForm from './InForm';

const Productin = ({ products, setProducts, select, setSelect, InOutProduct, setInOutProduct }) => {
    return(
        <section className="Productin">
            <div className="Title">
                <h1>New Transactions - Product In</h1>
            </div>
            <div className='Body'>
                <InForm
                    products={products}
                    setProducts={setProducts}
                    select={select}
                    setSelect={setSelect}
                    InOutProduct={InOutProduct}
                    setInOutProduct={setInOutProduct}
                />
            </div>
        </section>
    );
}

export default Productin;