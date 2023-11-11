import '../../style/Products.css';
import OverviewCard from './OverviewCard';
import ProductsTable from './ProductsTable';
import AddNewForm from './AddNewForm';
import ApiRequest from '../../utils/ApiRequest';

const Products = ({ ProductFetchError, setProductFetchError, IsProductLoading, setIsProductLoading, products, setProducts, AddNewBtnDisplay, setAddNewBtnDisplay, product, setProduct, search, setSearch, totalPrice, totalStock, TransactionHist, setTransactionHist }) => {
    const handleDelete = async (e) => {
        const filteredProducts = products.filter(product => parseInt(product.id) !== parseInt(e.target.id));
        setProducts(filteredProducts);

        const delId = {
            id : parseInt(e.target.id)
        }
        await ApiRequest.handleItems("http://127.0.0.1:5000/products", {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(delId)
        });
    }

    return(
        <section className="Products">
            <div className="Title">
                <h1>All Products</h1>
                <div>
                    <form className='SearchBar' onSubmit={(e) => {e.preventDefault()}}>
                        <label>Search products</label>
                        <input 
                            placeholder='Search items'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        ></input>
                    </form>
                    <button className="Button">
                        <span className="Lable" onClick={(e) => {AddNewBtnDisplay === "none" ? setAddNewBtnDisplay("flex") : setAddNewBtnDisplay("none")}}>Add New</span>
                    </button>
                </div>
            </div>
            <div className='Body'>
                <OverviewCard 
                    totalPrice={totalPrice}
                    totalStock={totalStock}
                />
                { IsProductLoading && <p>Pls wait! Loading...</p>}
                { ProductFetchError && <p style={{ color: "red" }}>{`${ProductFetchError}`}</p>}
                {
                    !IsProductLoading && !ProductFetchError && <ProductsTable
                                                            products={products.filter(product => (product.name).toLowerCase().includes(search.toLowerCase()))}
                                                            setProducts={setProducts}
                                                            handleDelete={handleDelete}
                                                        />
                }
            </div>
            <AddNewForm
                products={products}
                setProducts={setProducts}
                AddNewBtnDisplay={AddNewBtnDisplay}
                setAddNewBtnDisplay={setAddNewBtnDisplay} 
                product={product}
                setProduct={setProduct}
                TransactionHist={TransactionHist}
                setTransactionHist={setTransactionHist}
            />
        </section>
    );
}

export default Products;


//TODO: Product going negative