import '../../style/Products.css';
import NotFound from '../errors/NotFound';
import OverviewCard from './OverviewCard';
import ProductsTable from './ProductsTable';
import AddNewForm from './AddNewForm';

const Products = ({ products, setProducts, AddNewBtnDisplay, setAddNewBtnDisplay, product, setProduct, search, setSearch, totalPrice, totalStock }) => {
    const handleDelete = (e) => {
        const filteredProducts = products.filter(product => parseInt(product.id) !== parseInt(e.target.id));
        setProducts(filteredProducts);
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
                {
                    products.length ? 
                    <ProductsTable
                        products={products.filter(product => (product.name).toLowerCase().includes(search.toLowerCase()))}
                        setProducts={setProducts}
                        handleDelete={handleDelete}
                    /> : 
                    <NotFound 
                        msg="Products"
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
            />
        </section>
    );
}

export default Products;


//TODO: Product going negative