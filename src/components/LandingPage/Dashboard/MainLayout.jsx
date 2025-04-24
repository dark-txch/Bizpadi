import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '40px' }}>
          <Outlet />
        </div>
      </div>
    );
  }
  
  export default MainLayout;