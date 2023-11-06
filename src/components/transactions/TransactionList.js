import '../../style/TransactionList.css';
import NotFound from '../errors/NotFound';

const TransactionList = ({products, setProducts, TransactionHist, setTransactionHist}) => {
    const getDayFromDate = (date) => {
        console.log("getDayFromDate function");

        const dateIndex =  new Date(date).getDay();
        switch(dateIndex){
            case 0:
                return "Sunday";
            
            case 1:
                return "Monday";
            
            case 2:
                return "Tuesday";

            case 3:
                return "Wednesday";

            case 4:
                return "Thursday";

            case 5:
                return "Friday";

            case 6:
                return "Saturday";

            default:
                return "Invalid";
        } 
    }

    const getNameFromId = (id) => {
        const allProducts = products;
        const product = allProducts.find((product) => parseInt(product.id) === parseInt(id));
        if(product){
            return product.name;
        }

        return "Invalid";
    }

    const getQuantityFromId = (id) => {
        const allProducts = products;
        const product = allProducts.find((product) => parseInt(product.id) === parseInt(id));
        if(product){
            return product.quantity;
        }

        return "Invalid";
    }

    return(
        <ul className='TransactionList'>
            {
                TransactionHist.length ?
                    [...TransactionHist].reverse().map((Transaction) => (
                        <li 
                            key={Transaction.transaction_id}
                        >
                            <div className='DateDay'>
                                <span>{Transaction.date.split('-').slice(1, 3).reverse().join('-') + '-' + Transaction.date.split('-')[0]}</span>
                                <span>{getDayFromDate(Transaction.date)}</span>
                            </div>
                            <div className='InOut'>
                                <span className='Count' style={Transaction.in !== 0 ? {color: "green"} : {color : "red"}}>
                                    {
                                        Transaction.in !== 0 ? 
                                            "In " + Transaction.in :
                                                Transaction.out !== 0 ?  
                                                    "Out " + Transaction.out : 
                                                        "Invalid"
                                    }
                                </span>
                                <div className='Product_details'>
                                    <span className='lable'><span>Pdt:</span>{getNameFromId(Transaction.id) + "(" + Transaction.id + ")"}</span>
                                    <span className='lable'><span >Qt:</span>{ getQuantityFromId(Transaction.id)}</span>
                                </div>
                            </div>
                        </li>
                    )) :
                    <NotFound />
            }
        </ul>
    );
}

export default TransactionList;