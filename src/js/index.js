//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

const SecondsCounter = props => {
	return (
		<div className="container-fluid counter">
			<div className="row">
				<div className="clock col-1">
					<i className="far fa-clock"></i>
				</div>
				<div className="thousands col-1">
					{props.thousandsDigit % 10}
				</div>
				<div className="hundreds col-1">{props.hundredsDigit % 10}</div>
				<div className="tens col-1">{props.tensDigit % 10}</div>
				<div className="ones col-1">{props.onesDigit % 10}</div>
			</div>
		</div>
	);
};

SecondsCounter.PropTypes = {
	thousandsDigit: propTypes.number,
	hundredsDigit: propTypes.number,
	tensDigit: propTypes.number,
	onesDigit: propTypes.number
};

let counter = 0;

setInterval(function() {
	const thousands = Math.floor(counter / 1000);
	const hundreds = Math.floor(counter / 100);
	const tens = Math.floor(counter / 10);
	const ones = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			thousandsDigit={thousands}
			hundredsDigit={hundreds}
			tensDigit={tens}
			onesDigit={ones}
		/>,
		document.querySelector("#app")
	);
}, 1000);
