import '../../style/TransactionList.css';
import NotFound from '../errors/NotFound';
import { useMemo } from 'react';

const TransactionList = ({products, setProducts, TransactionHist, setTransactionHist}) => {
    const getDayFromDate = useMemo(() => {
        console.log("getDayFromDate function");

        return (date) => {
            const dateArray = date.split('-');
            const month = parseInt(dateArray[0], 10);
            const day = parseInt(dateArray[1], 10);
            const year = parseInt(dateArray[2], 10);
            const dateIndex = new Date(year, month - 1, day).getDay();
            switch (dateIndex) {
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
        };
    }, []);

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
                                    <span className='lable'><span>Pdt:</span>{Transaction.name + "(" + Transaction.id + ")"}</span>
                                    <span className='lable'><span >Qt:</span>{ Transaction.quantity }</span>
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