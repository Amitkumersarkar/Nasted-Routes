import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

    return (
        <div>
            <h2>Navbar</h2>
            <nav className='style'>
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/users'>Users</Link>
            </nav>
        </div>
    );
};

export default Navbar;