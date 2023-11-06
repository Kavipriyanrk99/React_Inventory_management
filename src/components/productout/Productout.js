import '../../style/Productout.css';
import OutForm from "./OutForm";

const Productout = ({ products, setProducts, OutProduct, setOutProduct, TransactionHist, setTransactionHist }) => {
    return(
        <section className="Productout">
            <div className="Title">
                <h1>New Transactions - Product Out</h1>
            </div>
            <div className='Body'>
                <OutForm
                    products={products}
                    setProducts={setProducts}
                    OutProduct={OutProduct}
                    setOutProduct={setOutProduct}
                    TransactionHist={TransactionHist}
                    setTransactionHist={setTransactionHist}
                />
            </div>
        </section>
    );
}

export default Productout;