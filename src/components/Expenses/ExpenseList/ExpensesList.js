import React from "react";
import ExpeneseItem from "../ExpenseItem/ExpeneseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
	let expensesList = expenses.length ? (
		expenses.map((ex) => (
			<ExpeneseItem
				key={ex.id}
				title={ex.title}
				amount={ex.amount}
				date={ex.date}
			/>
		))
	) : (
		<div className="expenses-list__fallback">No Expenses in this year</div>
	);
	return <div className="expenses-list">{expensesList}</div>;
};

export default ExpensesList;
