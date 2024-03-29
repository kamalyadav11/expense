import React from "react";
import Card from "../../common/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpeneseItem = ({ title, date, amount }) => {
	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{amount}</div>
			</div>
		</Card>
	);
};

export default ExpeneseItem;
