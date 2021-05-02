import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ addNewExpense, setShowAddButton, toggleAddButton }) => {
	const [formData, setFormData] = useState({
		title: "",
		amount: "",
		date: "",
	});

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === "date")
			setFormData((prevState) => ({ ...prevState, [name]: new Date(value) }));
		else setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		addNewExpense(formData);
		toggleAddButton();
	};

	return (
		<>
			<form onSubmit={onSubmitHandler} className="expense-form">
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input
							name="title"
							value={formData.title}
							type="text"
							onChange={onChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input
							name="amount"
							value={formData.amount}
							type="number"
							onChange={onChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input
							name="date"
							value={formData.date}
							type="date"
							onChange={onChangeHandler}
						/>
					</div>
				</div>
				<div className="new-expense__actions">
					<div>
						<button type="button" onClick={toggleAddButton}>
							Cancel
						</button>
					</div>
					<div>
						<button type="submit">Add Expense</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ExpenseForm;
