import { useState } from "react"
import { useEffect } from "react"
import "./TrackSales.css"


export default function TrackSales(){
   const [showForm, setShowForm] = useState(false) 
   const [date, setDate] = useState("")
   const [product, setProduct] = useState("")
   const [quantity, setQuantity] = useState("")
   const [costPrice, setCostPrice] = useState("")
   const [salePrice, setSalePrice] = useState("")
   const [salesRecords, setSalesRecords] = useState([])

   const [currentPage, setCurrentPage] = useState(1)
   const recordsPerPage = showForm ? 3 : 10

   const profit = 
           salePrice && costPrice ? 
          ( parseFloat(salePrice) - parseFloat(costPrice)) * parseInt(quantity)
           : ""

    const getToday = () => {
      const today = new Date()
       return today.toISOString().split("T")[0]
    }

    const formatDate = (isoDate) => {
      if (!isoDate || !isoDate.includes("-")) return isoDate
     const [year, month, day] = isoDate.split("-")
     if (!year || !month || !day) return isoDate
     return `${day}-${month}-${year.slice(2)}`
    }           
    useEffect(() => {
      if (showForm) {
        setDate(getToday())
      }
    }, [showForm])

   function toggleForm() {
     setShowForm(prev => {
       const nextState = !prev
       setCurrentPage(1) 
       return nextState
      })
   } 
   
   function handleSubmit(e){
      e.preventDefault()

      if (!date || !product || !quantity || !costPrice || !salePrice) {
        alert("Please fill in all fields.")
        return
      }

      const newRecord = {
        date:  new Date(date).toISOString().split("T")[0],
        product,
        quantity,
        costPrice: parseFloat(costPrice),
        salePrice: parseFloat(salePrice),
        profit: (parseFloat(salePrice) - parseFloat(costPrice)) * parseInt(quantity),
      }

      setSalesRecords([newRecord, ...salesRecords])
      setCurrentPage(1)


      setDate(getToday());
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
      setCurrentPage(1)

  }

   const indexOfLastRecord = currentPage * recordsPerPage;
   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
   const currentRecords = salesRecords.slice(indexOfFirstRecord, indexOfLastRecord);
   const totalPages = Math.ceil(salesRecords.length / recordsPerPage)
   


    return(
        <div> 
        <header className="track-sales">
            <h2>Track Sales</h2>
            <button className="track-btn" onClick={toggleForm} >
              {showForm ? "Close" : "Add new record"}
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
                            {currentRecords.map((record, index)=>(
                                <tr key={index}>
                                  <td>{formatDate(record.date)}</td>
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


                   {totalPages > 1 && (
                     <div className="pagination-buttons">
                        <button
                          onClick={() => setCurrentPage(1)}
                          disabled={currentPage === 1}>
                          First
                        </button>

                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}>
                           Prev
                        </button>

                        <span>
                          Page {currentPage} of {totalPages}
                        </span>

                        <button
                         onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                         disabled={currentPage === totalPages}>
                          Next
                        </button>

                        <button
                          onClick={() => setCurrentPage(totalPages)}
                          disabled={currentPage === totalPages}>
                        Last
                       </button>
                     </div>
                  )}

                </div>
            )}
        </main>


        </div>
    )
}