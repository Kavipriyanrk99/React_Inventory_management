import '../style/NavBar.css';
import DashboardBtn from './DashboardBtn';
import ProductsBtn from './ProductsBtn';
import TransactionsBtn from './TransactionsBtn'; 
import ProductIn from './ProductIn';
import ProductOut from './ProductOut';

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div className='InnerCont'>
                <DashboardBtn />
                <ProductsBtn />
                <TransactionsBtn />
                <ProductIn />
                <ProductOut />
            </div>
        </nav>
    );
}

export default NavBar;