import Sidebar from "./Sidebar"
import "./dashboardPage.css"
import { useState } from "react"

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
                    <p>Updated: {lastUpdated} </p>
                    <button onClick={handleRefresh}> 
                        <img src="/assets/icons/refresh.svg" alt="refresh icon" />
                    </button>
                </div>

                <section className="performanceOverview">
                    <table>
                        <tr>performance</tr>
                        <tr>OVERVIEW</tr>
                    </table>
                </section>


                <section className="top-prdct">
                    <h4>Top Product Sales</h4>
                    <p>Laptop</p>
                    <p>Phones</p>
                    <p>Head Phone</p>
                </section>

                <section className="team-mm">
                    <h4>Team Members</h4>
                    <div>
                        <p>Vivian Goodnes</p>
                        <p>CEO</p>
                    </div>


                </section>
            </main>

        </div>
    )
}

