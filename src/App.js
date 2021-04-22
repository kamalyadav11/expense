import "./App.css";
import ExpeneseItem from "./components/ExpeneseItem";

function App() {
	const expenses = [
		{ id: "1", title: "Toilet Paper", amount: 54.4, date: new Date() },
		{ id: "2", title: "Pencil", amount: 354, date: new Date() },
		{ id: "3", title: "Rubber", amount: 534, date: new Date() },
		{ id: "4", title: "Sharpner", amount: 23, date: new Date() },
	];

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
		<div className="App">
			<div>Most Simple React Application</div>
			<div className="expense-items">{renderExpenses()}</div>
		</div>
	);
}

export default App;
