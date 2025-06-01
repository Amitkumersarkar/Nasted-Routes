import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/users'>Users</Link>
            </nav>
        </div>
    );
};

export default Navbar;