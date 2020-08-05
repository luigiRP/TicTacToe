import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeaderGame from "./headerGame.js";

export default function GameView(props) {
	const [turn, setTurn] = useState(false);
	let [draw, setDraw] = useState(0);
	const [icon1, setIcon1] = useState("");
	const [icon2, setIcon2] = useState("");
	const [icon3, setIcon3] = useState("");
	const [icon4, setIcon4] = useState("");
	const [icon5, setIcon5] = useState("");
	const [icon6, setIcon6] = useState("");
	const [icon7, setIcon7] = useState("");
	const [icon8, setIcon8] = useState("");
	const [icon9, setIcon9] = useState("");
	const [iconX, setIcon] = useState("X");
	const [namePlayer, setPlayer] = useState(props.p1);

	useEffect(() => {
		checkWinner();
	});

	function insertIcon(icon) {
		setDraw(draw + 1);

		if (icon == "") {
			setTurn(!turn);
			if (turn) {
				setIcon("X");
				setPlayer(props.p1);
			} else {
				setIcon("O");
				setPlayer(props.p2);
			}
			return iconX;
		} else {
			return icon;
		}
	}
	function startOver() {
		let turnMessage = document.querySelector("#turnMessage");
		turnMessage.innerHTML = "Es el turno de " + namePlayer;
		setDraw(0);
		setIcon1("");
		setIcon2("");
		setIcon3("");
		setIcon4("");
		setIcon5("");
		setIcon6("");
		setIcon7("");
		setIcon8("");
		setIcon9("");
	}
	function checkWinner() {
		let isWinner = false;

		if (icon1 == icon2 && icon1 == icon3 && icon1 != "") {
			let winner = document.querySelector("#winner");
			let turnMessage = document.querySelector("#turnMessage");
			isWinner = true;
			turnMessage.innerHTML = " ";
			if (namePlayer == props.p1) {
				winner.innerHTML = "Gano " + props.p2 + "!";
			} else {
				winner.innerHTML = "Gano " + props.p1 + "!";
			}
		}

		if (icon4 == icon5 && icon5 == icon6 && icon4 != "") {
			isWinner = true;
			let winner = document.querySelector("#winner");
			let turnMessage = document.querySelector("#turnMessage");
			turnMessage.innerHTML = " ";
			if (namePlayer == props.p1) {
				winner.innerHTML = "Gano " + props.p2 + "!";
			} else {
				winner.innerHTML = "Gano " + props.p1 + "!";
			}
		}

		if (icon7 == icon8 && icon8 == icon9 && icon7 != "") {
			isWinner = true;
			let winner = document.querySelector("#winner");
			let turnMessage = document.querySelector("#turnMessage");
			turnMessage.innerHTML = " ";
			if (namePlayer == props.p1) {
				winner.innerHTML = "Gano " + props.p2 + "!";
			} else {
				winner.innerHTML = "Gano " + props.p1 + "!";
			}
		}

		if (icon1 == icon4 && icon4 == icon7 && icon1 != "") {
			isWinner = true;
			let winner = document.querySelector("#winner");
			let turnMessage = document.querySelector("#turnMessage");
			turnMessage.innerHTML = " ";
			if (namePlayer == props.p1) {
				winner.innerHTML = "Gano " + props.p2 + "!";
			} else {
				winner.innerHTML = "Gano " + props.p1 + "!";
			}
		}

		if (icon2 == icon5 && icon5 == icon8 && icon2 != "") {
			isWinner = true;
			let winner = document.querySelector("#winner");
			let turnMessage = document.querySelector("#turnMessage");
			turnMessage.innerHTML = " ";
			if (namePlayer == props.p1) {
				winner.innerHTML = "Gano " + props.p2 + "!";
			} else {
				winner.innerHTML = "Gano " + props.p1 + "!";
			}
		}

		if (icon3 == icon6 && icon6 == icon9 && icon3 != "") {
			isWinner = true;
			let winner = document.querySelector("#winner");
			let turnMessage = document.querySelector("#turnMessage");
			turnMessage.innerHTML = " ";
			if (namePlayer == props.p1) {
				winner.innerHTML = "Gano " + props.p2 + "!";
			} else {
				winner.innerHTML = "Gano " + props.p1 + "!";
			}
		}

		if (icon1 == icon5 && icon5 == icon9 && icon1 != "") {
			isWinner = true;
			let winner = document.querySelector("#winner");
			let turnMessage = document.querySelector("#turnMessage");
			turnMessage.innerHTML = " ";
			if (namePlayer == props.p1) {
				winner.innerHTML = "Gano " + props.p2 + "!";
			} else {
				winner.innerHTML = "Gano " + props.p1 + "!";
			}
		}

		if (icon3 == icon5 && icon5 == icon6 && icon3 != "") {
			isWinner = true;
			let winner = document.querySelector("#winner");
			let turnMessage = document.querySelector("#turnMessage");
			turnMessage.innerHTML = " ";
			if (namePlayer == props.p1) {
				winner.innerHTML = "Gano " + props.p2 + "!";
			} else {
				winner.innerHTML = "Gano " + props.p1 + "!";
			}
		}
		if (draw == 9 && !isWinner) {
			let winner = document.querySelector("#winner");
			let turnMessage = document.querySelector("#turnMessage");
			turnMessage.innerHTML = " ";
			winner.innerHTML = "Gano la 👵!";
		}
	}

	return (
		<Fragment>
			<HeaderGame />
			<h1 id="winner" className="text-success text-center" />
			<h2
				className="text-white text-center font-weight-bold my-5"
				id="turnMessage">
				Es el turno de {namePlayer}!
			</h2>
			<div className="container pt-5">
				<div className="row d-flex justify-content-center">
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => {
							setIcon1(insertIcon(icon1));
						}}>
						<p>{icon1}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => {
							setIcon2(insertIcon(icon2));
						}}>
						<p>{icon2}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => {
							setIcon3(insertIcon(icon3));
						}}>
						<p>{icon3}</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => {
							setIcon4(insertIcon(icon4));
						}}>
						<p>{icon4}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => {
							setIcon5(insertIcon(icon5));
						}}>
						<p>{icon5}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => {
							setIcon6(insertIcon(icon6));
						}}>
						<p>{icon6}</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => {
							setIcon7(insertIcon(icon7));
						}}>
						<p>{icon7}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => {
							setIcon8(insertIcon(icon8));
						}}>
						<p>{icon8}</p>
					</div>
					<div
						className="squares d-flex align-items-center justify-content-center"
						onClick={() => {
							setIcon9(insertIcon(icon9));
						}}>
						<p>{icon9}</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center my-3">
					<button
						className="btn btn-primary mx-auto"
						onClick={() => {
							startOver();
						}}>
						Start Over!
					</button>
				</div>
			</div>
		</Fragment>
	);
}

GameView.propTypes = {
	p1: PropTypes.string,
	p2: PropTypes.string
};
