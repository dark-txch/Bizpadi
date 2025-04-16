import Sidebar from "./Sidebar"
import "./dashboardPage.css"
import { useState } from "react"
import MyBarChart from "./BarChart"
import { Link } from "react-router-dom"


export default function Dashboard(){
      
   const currentDate = new Date().toLocaleDateString( 'en-US', {
    weekday: 'long', 
    year: 'numeric',
    month: 'long',
    day: 'numeric',
   }
   )

   const getCurrentTime = () =>
    new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    
   const [lastUpdated, setLastUpdated] = useState(getCurrentTime)

  const handleRefresh = () => {
    // Add any actual refresh logic here (like fetching new data)
    setLastUpdated(getCurrentTime());
  }
 
    return(
        <div className="hero-dashboard">
            <header>
                <h2>Dashboard</h2>
                <div className="flex-end">
                    <div className="calender-display">
                        <img src="/assets/icons/solarcalender.svg" alt="calender icon" />
                        {currentDate}
                    </div>

                    <div className="profile">
                        <p>Welcome, Vivian</p>
                    </div>
                </div>
            </header>
            <main>
                <div className="refresh">
                    <p>#STORE OVERVIEW</p>
                    <p>Updated: <span>{lastUpdated}</span> </p>
                    <button onClick={handleRefresh}> 
                        <img src="/assets/icons/refresh.svg" alt="refresh icon" />
                    </button>
                </div>

                <section className="performance">
                    <h3>Performance Overview</h3>
                    <MyBarChart/>
                </section>


                <div className="main-bottom">
                    <section className="top-prdct">
                        <h4>Top Product Sales</h4>
                        <p>Laptop   N1200   250</p>
                        <p>Phones   N1000   95 </p>
                        <p>Head Phone    N100   80</p>
                    </section>
                    <section className="shortcut">
                    <Link to="/dashboard/inventory">
                        <button>
                            + Add New Product to your Inventory
                        </button>
                    </Link>    

                    <Link to="/dashboard/sales">
                        <button>
                            + Add New Sales Record
                        </button>
                    </Link>

                    <Link to="/dashboard/clients">
                        <button>
                            + Add New Client
                        </button>
                    </Link>  
                    </section>
                </div>
            </main>

        </div>
    )
}

