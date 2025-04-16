import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from "recharts"

  const data = [
    { name: "Jan", sales: 30 },
    { name: "Feb", sales: 45 },
    { name: "Mar", sales: 28 },
    { name: "Apr", sales: 60 },
    { name: "May", sales: 50 },
    { name: "Jun", sales: 78 },
  ]

  const MyBarChart = () => {
    return (
      <div style={{ width: "40%", 
      height: 250, padding: "10px", 
      fontFamily: "Poppins", 
      color:"hsl(0, 0%, 0%)",
      border:"0.5px solid hsla(0, 5.10%, 84.70%, 0.25)",
      borderRadius: "8px",
      boxShadow: "0px 4px 4px 0px hsla(0, 0%, 0%, 0.25)",
      }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name"/>
            <YAxis width={25} />
            <Tooltip />
            <Bar dataKey="sales" fill="hsla(193, 91%, 39%, 1)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
  
  export default MyBarChart;

