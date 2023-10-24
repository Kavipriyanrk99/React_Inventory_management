import '../../style/Products.css';
import NotFound from '../errors/NotFound';
import OverviewCard from './OverviewCard';
import ProductsTable from './ProductsTable';
import AddNewForm from './AddNewForm';

const Products = ({ products, setProducts, AddNewBtnDisplay, setAddNewBtnDisplay, product, setProduct }) => {
    return(
        <section className="Products">
            <div className="Title">
                <h1>All Products</h1>
                <div>
                    <form className='SearchBar' onSubmit={(e) => {e.preventDefault()}}>
                        <label>Search products</label>
                        <input placeholder='Search items'>
                        </input>
                    </form>
                    <button className="Button">
                        <span className="Lable" onClick={(e) => {AddNewBtnDisplay === "none" ? setAddNewBtnDisplay("flex") : setAddNewBtnDisplay("none")}}>Add New</span>
                    </button>
                </div>
            </div>
            <div className='Body'>
                <OverviewCard />
                {
                    products.length ? 
                    <ProductsTable
                        products={products}
                        setProducts={setProducts}
                    /> : 
                    <NotFound 
                        msg="Products"
                    />
                }
            </div>
            <AddNewForm
                AddNewBtnDisplay={AddNewBtnDisplay}
                setAddNewBtnDisplay={setAddNewBtnDisplay} 
                product={product}
                setProduct={setProduct}
            />
        </section>
    );
}

export default Products;