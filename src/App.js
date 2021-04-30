import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

function App() {
	return (
		<div className="App">
			<NewExpense />
			<Expenses />
		</div>
	);
}

export default App;
