import React from "react";
import Card from "../../common/Card";
import ExpensesFilter from "../ExpenseFilter";
import ExpensesList from "../ExpenseList/ExpensesList";
import "./Expenses.css";

const Expenses = ({ expenses, selectedDate, filterExpenseByDate }) => {
	return (
		<>
			<Card className="expense-items">
				<ExpensesFilter
					currentDate={selectedDate}
					filterExpenseByDate={filterExpenseByDate}
				/>
				<ExpensesList expenses={expenses} />
			</Card>
		</>
	);
};

export default Expenses;
