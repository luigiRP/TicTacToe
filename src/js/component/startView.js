import React, { useEffect, useState } from "react";
import StartMenu from "./startMenu";

//create your first component

export function StartView() {
	const [view, setView] = useState(false);

	if (!view) {
		return <StartMenu />;
	} else {
		return null;
	}
}
