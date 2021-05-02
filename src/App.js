import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const initialExpenses = [
	{ id: "1", title: "Toilet Paper", amount: 54.4, date: new Date() },
	{ id: "2", title: "Pencil", amount: 354, date: new Date() },
	{ id: "3", title: "Rubber", amount: 534, date: new Date() },
	{ id: "4", title: "Sharpner", amount: 23, date: new Date() },
];

function App() {
	const [expenses, setExpenses] = useState(initialExpenses);

	const addNewExpense = (newExpense) => {
		const newEnteredData = {
			...newExpense,
			id: Math.random().toString(),
		};
		setExpenses((prevState) => [...prevState, newEnteredData]);
	};
	return (
		<div className="App">
			<NewExpense addNewExpense={addNewExpense} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
