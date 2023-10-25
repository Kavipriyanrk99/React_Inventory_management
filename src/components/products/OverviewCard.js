import { AiFillDropboxCircle } from  "@react-icons/all-files/ai/AiFillDropboxCircle";
import { FaRupeeSign } from  "@react-icons/all-files/fa/FaRupeeSign";

const OverviewCard = ({ totalPrice, totalStock }) => {
    return(
        <div className="OverviewCard">
            <div className="OverviewCard1">
                <AiFillDropboxCircle className="DropBoxIcon"></AiFillDropboxCircle>
                <div>
                    <h3>
                        Stocks In hand
                    </h3>
                    <p>
                        {totalStock}
                    </p>
                </div>
            </div>
            <div className="OverviewCard2">
                <FaRupeeSign className="RsIcon"></FaRupeeSign>
                <div>
                    <h3>
                        Total Price
                    </h3>
                    <p>
                        {totalPrice}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OverviewCard;