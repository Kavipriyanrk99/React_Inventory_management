import '../../style/Productin.css';
import InForm from './InForm';

const Productin = ({ products, setProducts, InProduct, setInProduct }) => {
    return(
        <section className="Productin">
            <div className="Title">
                <h1>New Transactions - Product In</h1>
            </div>
            <div className='Body'>
                <InForm
                    products={products}
                    setProducts={setProducts}
                    InProduct={InProduct}
                    setInProduct={setInProduct}
                />
            </div>
        </section>
    );
}

export default Productin;