import React from "react";
import Card from "../../common/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpenseList/ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ expenses, selectedDate, filterExpenseByDate }) => {
	return (
		<>
			<Card className="expense-items">
				<ExpensesFilter
					currentDate={selectedDate}
					filterExpenseByDate={filterExpenseByDate}
				/>
				<ExpensesChart expenses={expenses} />
				<ExpensesList expenses={expenses} />
			</Card>
		</>
	);
};

export default Expenses;
