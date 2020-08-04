import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import HeaderGame from "./headerGame.js";

export default function GameView(props) {
	const [turn, setTurn] = useState(false);
	const [icon1, setIcon1] = useState("");
	const [icon2, setIcon2] = useState("");
	const [icon3, setIcon3] = useState("");
	const [icon4, setIcon4] = useState("");
	const [icon5, setIcon5] = useState("");
	const [icon6, setIcon6] = useState("");
	const [icon7, setIcon7] = useState("");
	const [icon8, setIcon8] = useState("");
	const [icon9, setIcon9] = useState("");

	function insertIcon(icon) {
		setTurn(!turn);
		if (turn) {
			icon = "X";
		} else {
			icon = "O";
		}

		return icon;
	}

	return (
		<Fragment>
			<HeaderGame />
			<h2 className="text-white text-center font-weight-bold my-5">
				Es el turno de {props.p1}!
			</h2>
			<div className="container mt-5 pt-5">
				<div className="row d-flex justify-content-center">
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => insertIcon({ icon1 })}>
						<p>{icon1}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => setIcon2("X")}>
						<p>{icon2}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => setIcon3("X")}>
						<p>{icon3}</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => setIcon4("X")}>
						<p>{icon4}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => setIcon5("X")}>
						<p>{icon5}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => setIcon6("X")}>
						<p>{icon6}</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => setIcon7("X")}>
						<p>{icon7}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => setIcon8("X")}>
						<p>{icon8}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => setIcon9("X")}>
						<p>{icon9}</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

GameView.propTypes = {
	p1: PropTypes.string,
	p2: PropTypes.string
};
