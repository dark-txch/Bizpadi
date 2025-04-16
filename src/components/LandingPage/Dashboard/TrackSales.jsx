import { useState } from "react"
import "./TrackSales.css"


export default function TrackSales(){
   const [showForm, setShowForm] = useState(false) 
   const [date, setDate] = useState("")
   const [product, setProduct] = useState("")
   const [quantity, setQuantity] = useState("")
   const [costPrice, setCostPrice] = useState("")
   const [salePrice, setSalePrice] = useState("")
   const [salesRecords, setSalesRecords] = useState([])

   const profit = 
           salePrice && costPrice ? 
          ( parseFloat(salePrice) - parseFloat(costPrice)) * parseInt(quantity)
           : ""


   function toggleForm(){
    setShowForm(!showForm)
   }
   
   function handleSubmit(e){
      e.preventDefault()

      if (!date || !product || !quantity || !costPrice || !salePrice) {
        alert("Please fill in all fields.")
        return
      }

      const newRecord = {
        date,
        product,
        quantity,
        costPrice: parseFloat(costPrice),
        salePrice: parseFloat(salePrice),
        profit: (parseFloat(salePrice) - parseFloat(costPrice)) * parseInt(quantity),
      }

      setSalesRecords([...salesRecords, newRecord])

      setDate("");
      setProduct("");
      setQuantity("");
      setCostPrice("");
      setSalePrice("")

   }

   const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (!confirmDelete) return;
  
    const updatedRecords = salesRecords.filter((_, index) => index !== indexToDelete);
    setSalesRecords(updatedRecords);
  }

  const handleCancel = () =>{
      setDate("");
      setProduct("");
      setQuantity("");
      setCostPrice("");
      setSalePrice("")

      setShowForm(false)
  }

    return(
        <div> 
        <header className="track-sales">
            <h2>Track Sales</h2>
            <button className="track-btn" onClick={toggleForm} >
              {showForm ? "Close" : "Add new item"}
            </button>
        </header>

        <main>
            {showForm && 
              <form className="track-form" onSubmit={handleSubmit}>
                <div>
                  <label>
                      Date
                      <input
                       type="date"
                       value={date}
                       onChange={(e) => setDate(e.target.value)}
                       />
                  </label>
                  <label>
                      Product
                      <input
                       type="text"
                       value={product}
                       onChange={(e) => setProduct(e.target.value)}
                      />
                  </label>
                  <label>
                      Quantity
                      <input
                       type="number"
                       value={quantity}
                       onChange={(e) => setQuantity(e.target.value)}
                      />
                  </label>
                  <label>
                      Cost Price
                      <input
                      type="number"
                      value={costPrice}
                      onChange={(e) => setCostPrice(e.target.value)}
                      />
                  </label>
                  <label>
                      Sale Price
                      <input
                      type="number"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                      />
                  </label>
                  <label>
                      Profit
                      <input
                       type="text"
                       value={profit ? `₦${profit.toLocaleString()}` : ""}
                       readOnly
                      />
                  </label>
                </div>

                <button type="submit" className="last-item">Add Sale Record</button>
                <button type="submit" className="last-item" onClick={handleCancel}>Cancel</button>
              </form>
            }

            {salesRecords.length > 0 && (
                <div>
                    <h3 className="table">Sales Record</h3>
                    <table>
                        <thead>
                        <tr>
                          <th>Date</th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Cost Price</th>
                          <th>Sale Price</th>
                          <th>Profit</th>
                          <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {salesRecords.map((record, index)=>(
                                <tr key={index}>
                                  <td>{record.date}</td>
                                  <td>{record.product}</td>
                                  <td>{record.quantity}</td>
                                  <td>₦{record.costPrice.toLocaleString()}</td>
                                  <td>₦{record.salePrice.toLocaleString()}</td>
                                  <td>₦{record.profit.toLocaleString()}</td>
                                  <td>
                                  <button onClick={() => handleDelete(index)}>Delete</button>
                                  </td>
                              </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </main>


        </div>
    )
}