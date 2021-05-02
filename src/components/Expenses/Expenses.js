import React, { useState } from "react";
import Card from "../common/Card";
import ExpeneseItem from "./ExpeneseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
	const [selectedDate, setSelectedDate] = useState(new Date().getFullYear());

	const filterExpenseByDate = (date) => {
		setSelectedDate(date);
	};

	const renderExpenses = () =>
		expenses.map((ex) => (
			<ExpeneseItem
				key={ex.id}
				title={ex.title}
				amount={ex.amount}
				date={ex.date}
			/>
		));

	return (
		<>
			<Card className="expense-items">
				<ExpensesFilter
					currentDate={selectedDate}
					filterExpenseByDate={filterExpenseByDate}
				/>
				{renderExpenses()}
			</Card>
		</>
	);
};

export default Expenses;
