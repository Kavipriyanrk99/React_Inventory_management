import '../style/NavBar.css';
import DashboardBtn from './DashboardBtn';
import ProductsBtn from './ProductsBtn';
import TransactionsBtn from './TransactionsBtn'; 
import ProductInBtn from './ProductInBtn';
import ProductOutBtn from './ProductOutBtn';

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div className='InnerCont'>
                <DashboardBtn />
                <ProductsBtn />
                <TransactionsBtn />
                <ProductInBtn />
                <ProductOutBtn />
            </div>
        </nav>
    );
}

export default NavBar;