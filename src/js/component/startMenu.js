import React from "react";
import HeaderGame from "./startMenu.js";

export default function StartMenu() {
	return (
		<div>
			<HeaderGame />
			<h2 className="text-white text-center font-weight-bold my-5">
				Pick a weapon! 🕹
			</h2>
			<div className="container bg-secondary">
				<h3 className="row text-white justify-content-center font-weight-bold my-5">
					Choose a weapon
				</h3>
				<div className="row d-flex justify-content-around">
					<input
						type="text"
						placeholder="Player 1"
						className="col-5"
					/>
					<input
						type="text"
						placeholder="Player 2"
						className="col-5"
					/>
				</div>
				<div className="row d-flex justify-content-around">
					<div className="col-2 rounded bg-dark  my-5">
						<h1 className="text-danger text-center">X</h1>
					</div>
					<div className="col-2 rounded bg-dark  my-5">
						<h1 className="text-success text-center">O</h1>
					</div>
				</div>

				<div className="row d-flex justify-content-center my-2 pb-5">
					<button className="col-3 btn btn-success">
						<h1>Start!</h1>
					</button>
				</div>
			</div>
		</div>
	);
}
