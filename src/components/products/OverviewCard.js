import { AiFillDropboxCircle } from  "@react-icons/all-files/ai/AiFillDropboxCircle";
import { FaRupeeSign } from  "@react-icons/all-files/fa/FaRupeeSign";

const OverviewCard = () => {
    return(
        <div className="OverviewCard">
            <div className="OverviewCard1">
                <AiFillDropboxCircle className="DropBoxIcon"></AiFillDropboxCircle>
                <div>
                    <h3>
                        Stocks In hand
                    </h3>
                    <p>
                        50000000
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
                        500
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OverviewCard;