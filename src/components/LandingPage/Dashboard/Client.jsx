import { useState } from "react"
import "./Client.css"
import Pagination from "../../Reusable/Pagination"




export default function Client(){
    const [add, setAdd] = useState(false)

    function handleButton(){
        setAdd(prev => !prev)
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        status: "none",
      })

    const [clients, setClients] = useState([]) 
    const [currentPage, setCurrentPage] = useState(1)
    const clientsPerPage = add ? 6 : 8 

    const cancel = () => {
        setFormData({ name: "", email: "", phone: "", status: "none" });
        setAdd(false);
      }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.phone) return

        setClients((prevClients) => [formData, ...prevClients])

        setFormData({
            name: "",
            email: "",
            phone: "",
            status: "none",

        })
    }
    
    const handleDelete = (index) => {
        const updatedClients = clients.filter((_, i) => i !== index);
        setClients(updatedClients);
    }

    const handleEdit = (index) => {
        const client = clients[index];
        setFormData(client);
    
        // Remove it so the edited one replaces it on submit
        const updatedClients = clients.filter((_, i) => i !== index);
        setClients(updatedClients);
    }
     
    // Pagination
    const indexOfLast = currentPage * clientsPerPage
    const indexOfFirst = indexOfLast - clientsPerPage
    const currentClients = clients.slice(indexOfFirst, indexOfLast)
    const totalPages = Math.ceil(clients.length / clientsPerPage)

    return(
        <div>
            <header>
                <h2>Clients</h2>
                <button className="add-btn" onClick={handleButton}> {add ? "Close" : "Add new Client"} </button>
            </header>

           {add &&  <form className="client-form" onSubmit={handleSubmit}>
             <section>
                <input
                  name="name"
                  type="text"
                  placeholder="Client Name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange} >

                     <option value="none">No Recent Transaction</option>
                     <option value="pending">Pending payment</option>
                    <option value="complete">Complete</option>
                </select> 
             </section>  

                <button  className="client-add" type="submit">Add Client</button>
                <button className="client-cancel" onClick={cancel}>Cancel</button>

            </form>
           
           } 

            <main>

             {clients.length > 0 && (
                <>
                  <table className="client-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentClients.map((client, i) => (
                        <tr key={indexOfFirst + i}>
                          <td>{client.name}</td>
                          <td>{client.email}</td>
                          <td>{client.phone}</td>
                          <td> <div className={`status ${client.status}`}>{client.status}</div></td>
                          <td>
                            <button className="action" onClick={() => handleEdit(indexOfFirst + i)}>
                              Edit
                            </button>
                            <button  className="action" onClick={() => handleDelete(indexOfFirst + i)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {totalPages > 1 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </>
              )}
            </main>
        </div>
    )
}