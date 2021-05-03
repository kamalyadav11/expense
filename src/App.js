import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const initialExpenses = [
	{
		id: "1",
		title: "Pen",
		amount: 54.4,
		date: new Date("December 17, 2021"),
	},
	{ id: "2", title: "Pencil", amount: 354, date: new Date("January 18, 2021") },
	{ id: "3", title: "Rubber", amount: 534, date: new Date("March 19, 2019") },
	{ id: "4", title: "Sharpner", amount: 23, date: new Date("August 16, 2019") },
];

function App() {
	const [expenses, setExpenses] = useState(initialExpenses);
	const [selectedDate, setSelectedDate] = useState("2021");

	const filterExpenseByDate = (date) => {
		setSelectedDate(date);
	};

	const filteredExpenses = expenses.filter((expense) => {
		return selectedDate === expense.date.getFullYear().toString();
	});

	const addNewExpense = (newExpense) => {
		const newEnteredData = {
			...newExpense,
			id: Math.random().toString(),
		};
		setExpenses((prevState) => [newEnteredData, ...prevState]);
	};

	return (
		<div className="App">
			<NewExpense addNewExpense={addNewExpense} />
			<Expenses
				expenses={filteredExpenses}
				selectedDate={selectedDate}
				filterExpenseByDate={filterExpenseByDate}
			/>
		</div>
	);
}

export default App;
