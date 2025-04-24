import "./Inventory.css";

import { MdAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const products = [
	{
		name: "Laptop",
		label: "LAP123",
		quantity: 35,
		cost: "₦1,000,000",
		price: "₦1,200,000",
	},
	{
		name: "Smart Phone",
		label: "PHN564",
		quantity: 60,
		cost: "₦900,000",
		price: "₦1,043,000",
	},
	{
		name: "Tablet",
		label: "TABI42",
		quantity: 62,
		cost: "₦500,000",
		price: "₦650,000",
	},
	{
		name: "Smart Watch",
		label: "SWT632",
		quantity: 103,
		cost: "₦120,550",
		price: "₦200,000",
	},
	{
		name: "Headphones",
		label: "HPN153",
		quantity: 85,
		cost: "₦300,000",
		price: "₦460,000",
	},
	{
		name: "Wireless Mouse",
		label: "WLM258",
		quantity: 60,
		cost: "₦20,250",
		price: "₦50,000",
	},
	{
		name: "Keyboard",
		label: "KBD698",
		quantity: 63,
		cost: "₦20,250",
		price: "₦50,000",
	},
	{
		name: "Monitor",
		label: "MNT171",
		quantity: 25,
		cost: "₦450,600",
		price: "₦550,000",
	},
	{
		name: "Bluetooth Speaker",
		label: "BTS323",
		quantity: 96,
		cost: "₦120,500",
		price: "₦200,000",
	},
];

export default function Inventory() {
	return (
		<div className="inventoryDashboard">
			<header>
				<h2>Inventory</h2>
				<div className="flex-end">
					<button className="addItem">
						<MdAdd /> Add Item
					</button>
				</div>
			</header>

			{/* ------------------------------------------------------------------- */}
			{/* ---------------------- HEADERS */}
			<div className="inventoryHeaderContainer">
				<div className="column-header">
					<h5>Product Name</h5>
				</div>
				<div className="column-header">
					<h5>Product Label</h5>
				</div>
				<div className="column-header">
					<h5>Quantity</h5>
				</div>
				<div className="column-header">
					<h5>Cost Price</h5>
				</div>
				<div className="column-header">
					<h5>Selling Price</h5>
				</div>
			</div>

			{/* ---------------------- BODY */}
			<div className="inventoryBody">
				{products.map((item, index) => (
					<div className="inventoryRow" key={index}>
						<div className="inventoryCell">{item.name}</div>
						<div className="inventoryCell">{item.label}</div>
						<div className="inventoryCell">{item.quantity}</div>
						<div className="inventoryCell">{item.cost}</div>
						<div className="inventoryCell price-actions">
							<span>{item.price}</span>
							<div className="icons">
								<RiDeleteBin6Line className="delete" />
								<FaRegEdit className="edit" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
