
const Navbar = () => {

    return (
        <div>
            <h2>Navbar</h2>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='/blogs'>Blogs</Link>
            </ul>
        </div>
    );
};

export default Navbar;