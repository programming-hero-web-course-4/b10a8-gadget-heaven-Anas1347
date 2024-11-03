import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost text-xl">GadgetHeaven</Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              Menu
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" className={location.pathname === '/' ? 'font-bold' : ''}>Home</Link>
              </li>
              <li>
                <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'font-bold' : ''}>Dashboard</Link>
              </li>
              <li>
                <Link to="/stats" className={location.pathname === '/stats' ? 'font-bold' : ''}>Stats</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'font-bold' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'font-bold' : ''}>Dashboard</Link>
            </li>
            <li>
              <Link to="/stats" className={location.pathname === '/stats' ? 'font-bold' : ''}>Stats</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn">Cart 🛒</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
