import { useState } from "react";
import "./Inventory.css";
import { MdAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export default function Inventory() {
  const [showForm, setShowForm] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = showForm ? 5 : 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, label, quantity, cost, price } = formData;

    if (!name || !label || !quantity || !cost || !price) {
      alert("Please fill in all fields.");
      return;
    }

    const newItem = {
      ...formData,
      quantity: parseInt(quantity),
      cost: parseFloat(cost),
      price: parseFloat(price),
      id: formData.id || Date.now(), // for unique key
    };

    setInventory([newItem, ...inventory]);
    setFormData({});
    setIsEditing(false);
    setCurrentPage(1);
  };

  const handleCancel = () => {
    setFormData({});
    setIsEditing(false);
    setShowForm(false);
  };

  const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    const updatedItems = inventory.filter((_, index) => index !== indexToDelete);
    setInventory(updatedItems);

    // Handle pagination fallback
    const indexOfFirstRecord = (currentPage - 1) * recordsPerPage;
    if (updatedItems.length <= indexOfFirstRecord && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleForm = () => {
    setShowForm((prev) => {
      const nextState = !prev;
      setCurrentPage(1);
      if (!nextState) {
        setFormData({});
        setIsEditing(false);
      }
      return nextState;
    });
  };

  const handleEdit = (index) => {
    const item = inventory[index];
    setFormData(item);
    setIsEditing(true);
    setShowForm(true);

    const updatedInventory = inventory.filter((_, i) => i !== index);
    setInventory(updatedInventory);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentItems = inventory.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(inventory.length / recordsPerPage);

  return (
    <div>
      <header className="inventory-header">
        <h2>Inventory</h2>
        <button className="add-btn" onClick={toggleForm}>
          {showForm ? "Close" : <><MdAdd /> Add Item</>}
        </button>
      </header>

      <main>
        {showForm && (
          <form className="inventory-form" onSubmit={handleSubmit}>
            <label>
              Product Name
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            <label>
              Product Label
              <input
                type="text"
                value={formData.label || ""}
                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
              />
            </label>
            <label>
              Quantity
              <input
                type="number"
                value={formData.quantity || ""}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
            </label>
            <label>
              Cost Price (₦)
              <input
                type="number"
                value={formData.cost || ""}
                onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
              />
            </label>
            <label>
              Selling Price (₦)
              <input
                type="number"
                value={formData.price || ""}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </label>
             <div>
            <button type="submit">{isEditing ? "Update Item" : "Add Item"}</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        )}

        {inventory.length > 0 && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Label</th>
                  <th>Quantity</th>
                  <th>Cost Price</th>
                  <th>Selling Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.label}</td>
                    <td>{item.quantity}</td>
                    <td>₦{item.cost.toLocaleString()}</td>
                    <td>₦{item.price.toLocaleString()}</td>
                    <td className="actions">
                      <FaRegEdit className="edit" onClick={() => handleEdit(index + indexOfFirstRecord)} />
                      <RiDeleteBin6Line className="delete" onClick={() => handleDelete(index + indexOfFirstRecord)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className="pagination-buttons">
                <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>First</button>
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
                <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>Last</button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
