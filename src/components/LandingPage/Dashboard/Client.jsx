import { useState } from "react";
import "./Client.css";
import Pagination from "../../Reusable/Pagination";

export default function Client() {
	const [add, setAdd] = useState(false);

	function handleButton() {
		setAdd((prev) => !prev);
	}

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone_number: "",
		address: "",
	});

	const [clients, setClients] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const clientsPerPage = add ? 6 : 8;

	const cancel = () => {
		setFormData({ name: "", email: "", phone_number: "", address: "" });
		setAdd(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// the function
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!formData.name ||
			!formData.email ||
			!formData.phone_number ||
			!formData.address
		) {
			alert("Please fill in all fields before submitting.");
			return;
		}

		const token = localStorage.getItem("token"); // make sure this is stored during login

		if (!token) {
			alert("You must be logged in to add a client.");
			return;
		}

		try {
			const response = await fetch(
				"https://bizpadi-backend.onrender.com/api/clients",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				const newClient = await response.json();

				// Add new client to the UI
				setClients((prevClients) => [newClient, ...prevClients]);

				// Clear form & close it
				setFormData({ name: "", email: "", phone_number: "", address: "" });
				setAdd(false);
			} else {
				const error = await response.json();
				alert(
					"Failed to add client: " + (error.message || "Something went wrong")
				);
			}
		} catch (err) {
			console.error("Error adding client:", err);
			alert("An error occurred while adding the client.");
		}
	};

	// finish

	const handleDelete = (index) => {
		const updatedClients = clients.filter((_, i) => i !== index);
		setClients(updatedClients);
	};

	const handleEdit = (index) => {
		if (!add) {
			setAdd(true);
		}
		const client = clients[index];
		setFormData(client);

		// Remove it so the edited one replaces it on submit
		const updatedClients = clients.filter((_, i) => i !== index);
		setClients(updatedClients);
	};

	// Pagination
	const indexOfLast = currentPage * clientsPerPage;
	const indexOfFirst = indexOfLast - clientsPerPage;
	const currentClients = clients.slice(indexOfFirst, indexOfLast);
	const totalPages = Math.ceil(clients.length / clientsPerPage);

	return (
		<div>
			<header>
				<h2>Clients</h2>
				<button className="add-btn" onClick={handleButton}>
					{" "}
					{add ? "Close" : "Add new Client"}{" "}
				</button>
			</header>

			{add && (
				<form className="client-form" onSubmit={handleSubmit}>
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
							name="phone_number"
							type="tel"
							placeholder="Phone Number"
							value={formData.phone_number}
							onChange={handleChange}
						/>

						<input
							name="address"
							type="text"
							placeholder="Address"
							value={formData.address}
							onChange={handleChange}
						/>
					</section>

					<button className="client-add" type="submit">
						Add Client
					</button>
					<button className="client-cancel" onClick={cancel}>
						Cancel
					</button>
				</form>
			)}

			<main>
				{clients.length > 0 && (
					<>
						<table className="client-table">
							<thead>
								<tr>
									<th>name</th>
									<th>email</th>
									<th>phone_number</th>
									<th>address</th>
								</tr>
							</thead>
							<tbody>
								{currentClients.map((client, i) => (
									<tr key={indexOfFirst + i}>
										<td>{client.name}</td>
										<td>{client.email}</td>
										<td>{client.phone_number}</td>
										<td>{client.address}</td>
										<td>
											<button
												className="action"
												onClick={() => handleEdit(indexOfFirst + i)}
											>
												<img
													src="/assets/icons/edit.icon.svg"
													alt="edit icon"
												/>
											</button>
											<button
												className="action delete"
												onClick={() => handleDelete(indexOfFirst + i)}
											>
												<img
													src="/assets/icons/delete.icon.svg"
													alt="delete icon"
												/>
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
