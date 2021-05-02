import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addNewExpense }) => {
	return (
		<div className="new-expense">
			<ExpenseForm addNewExpense={addNewExpense} />
		</div>
	);
};

export default NewExpense;
