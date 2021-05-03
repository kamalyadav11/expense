import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label, maxValue, value }) => {
	let barFillheight = "0%";

	if (maxValue > 0) barFillheight = Math.round((value / maxValue) * 100) + "%";

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height: barFillheight }}
				></div>
			</div>
			<div className="chart-bar__label">{label}</div>
		</div>
	);
};

export default ChartBar;
