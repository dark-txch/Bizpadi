import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem('user'); // Optional
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="holder">
        <img src="/assets/icons/search.ic.svg" alt="search icon" />
        <input type="text" placeholder="search" className="search-bar" />
        </div>
      <nav>
        <NavLink to="/dashboard" end>
        <img src="/assets/icons/db.icon.svg" alt="dashboard icon" />
        Dashboard</NavLink>
        <NavLink to="/dashboard/clients">
        <img src="/assets/icons/client.ic.svg" alt="clients icon" />
        Clients</NavLink>
        <NavLink to="/dashboard/inventory">
        <img src="/assets/icons/invt.ic.svg" alt="inventory icon" />
        Inventory</NavLink>
        <NavLink to="/dashboard/sales">
        <img src="/assets/icons/trksales.ic.svg" alt="sales icon" />
        Track Sales</NavLink>
        <NavLink to="/dashboard/team">
        <img src="/assets/icons/team.ic.svg" alt="team icon" />
        Team</NavLink>
      </nav>
      <button onClick={handleLogout} className="logout-btn">
        <img src="/assets/icons/logout.icon.svg" alt="logout icon" />
        Log Out
      </button>
    </div>
  );
}

export default Sidebar;
