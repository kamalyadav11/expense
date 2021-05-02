import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addNewExpense }) => {
	const [showAddButton, setShowAddButton] = useState(true);

	const toggleAddButton = () => {
		setShowAddButton(!showAddButton);
	};

	return (
		<div className="new-expense">
			{showAddButton ? (
				<div className="new-expense__add">
					<button onClick={toggleAddButton}>Add New Expense</button>
				</div>
			) : (
				<ExpenseForm
					addNewExpense={addNewExpense}
					toggleAddButton={toggleAddButton}
				/>
			)}
		</div>
	);
};

export default NewExpense;
