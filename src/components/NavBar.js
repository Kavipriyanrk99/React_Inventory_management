import '../style/NavBar.css';
import DashboardBtn from './DashboardBtn';
import ProductsBtn from './ProductsBtn';
import TransactionsBtn from './TransactionsBtn'; 
import ProductInBtn from './ProductInBtn';
import ProductOutBtn from './ProductOutBtn';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div className='InnerCont'>
                <Link to='/'><DashboardBtn /></Link>
                <Link to='products'><ProductsBtn /></Link>
                <Link to='transactions'><TransactionsBtn /></Link>
                <Link to='productin'><ProductInBtn /></Link>
                <Link to='productout'><ProductOutBtn /></Link>
            </div>
        </nav>
    );
}

export default NavBar;