import '../../style/Transactions.css';
import TransactionList from './TransactionList';

const Transactions = ({ TransactionFetchError, setTransactionFetchError, IsTransactionLoading, setIsTransactionLoading, products, setProducts, TransactionHist, setTransactionHist}) => {
    return(
        <section className="Transactions">
            <div className="Title">
                <h1>Transactions</h1>
            </div>
            <div className='Body'>
                <div className='TransactionsContainer'>
                    { IsTransactionLoading && <p>Pls wait! Loading...</p>}
                    { TransactionFetchError && <p style={{ color: "red" }}>{`${TransactionFetchError}`}</p>}
                    {
                        !IsTransactionLoading && !TransactionFetchError && <TransactionList 
                                                                                products={products}
                                                                                setProducts={setProducts}
                                                                                TransactionHist={TransactionHist}
                                                                                setTransactionHist={setTransactionHist}
                                                                            />
                    }
                </div>
            </div>
        </section>
    );
}

export default Transactions;