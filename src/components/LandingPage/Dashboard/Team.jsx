import { useState } from "react";
import "./Client.css"; // Reuse same styling
import Pagination from "../../Reusable/Pagination";

export default function Teams() {
  const [add, setAdd] = useState(false);

  function handleButton() {
    setAdd((prev) => !prev);
  }

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    staffId: "",
    department: "",
  });

  const [teams, setTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = add ? 6 : 8;

  const cancel = () => {
    setFormData({ name: "", position: "", staffId: "", department: "" });
    setAdd(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.position || !formData.staffId || !formData.department) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setTeams((prevTeams) => [formData, ...prevTeams]);

    setFormData({ name: "", position: "", staffId: "", department: "" });
  };

  const handleDelete = (index) => {
    const updatedTeams = teams.filter((_, i) => i !== index);
    setTeams(updatedTeams);
  };

  const handleEdit = (index) => {
    if(!add) {
      setAdd(true)
    }
    const member = teams[index];
    setFormData(member);
    const updatedTeams = teams.filter((_, i) => i !== index);
    setTeams(updatedTeams);
  };

  const indexOfLast = currentPage * teamsPerPage;
  const indexOfFirst = indexOfLast - teamsPerPage;
  const currentTeams = teams.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(teams.length / teamsPerPage);

  return (
    <div>
      <header>
        <h2>Team Members</h2>
        <button className="add-btn" onClick={handleButton}> {add ? "Close" : "Add new Member"} </button>
      </header>

      {add && (
        <form className="client-form" onSubmit={handleSubmit}>
          <section>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="position"
              type="text"
              placeholder="Position"
              value={formData.position}
              onChange={handleChange}
            />

            <input
              name="staffId"
              type="text"
              placeholder="Staff ID"
              value={formData.staffId}
              onChange={handleChange}
            />

            <input
              name="department"
              type="text"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
            />
          </section>

          <button className="client-add" type="submit">Add Member</button>
          <button className="client-cancel" onClick={cancel}>Cancel</button>
        </form>
      )}

      <main>
        {teams.length > 0 && (
          <>
           <table className="client-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Staff ID</th>
                  <th>Department</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentTeams.map((member, i) => (
                  <tr key={indexOfFirst + i}>
                    <td>{member.name}</td>
                    <td>{member.position}</td>
                    <td>{member.staffId}</td>
                    <td>{member.department}</td>
                    <td>
                      <button className="action" onClick={() => handleEdit(indexOfFirst + i)}>
                      <img src="/assets/icons/edit.icon.svg" alt="edit icon" />
                      </button>
                      <button className="action" onClick={() => handleDelete(indexOfFirst + i)}>
                      <img src="/assets/icons/delete.icon.svg" alt="delete icon" />
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
  );
}
