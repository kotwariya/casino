import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../store/store";
import Slots from "./Slots";

import classes from "./MagicNumber.module.scss";

const MagicNumber = (props) => {
	const state = useSelector((state) => state);

	if (state.user.isLoggedIn === true && typeof Storage !== "undefined") {
		localStorage.setItem("state", JSON.stringify(state));
	}
	const dispatch = useDispatch();

	const [slot, setSlot] = useState({
		slot_1: 1,
		slot_2: 1,
		slot_3: 1,
	});

	const onCancelHandler = () => {
		props.onClick();
	};

	const balanceUpdate = async (slot_1, slot_2, slot_3) => {
		let bonousCredit;
		if (slot_1 !== slot_2 && slot_1 !== slot_3 && slot_2 !== slot_3) {
			bonousCredit = 0;
		} else if (slot_1 === slot_2 && slot_1 === slot_3 && slot_1 === 7) {
			bonousCredit = 10;
		} else if (slot_1 === slot_2 && slot_1 === slot_3) {
			bonousCredit = 5;
		} else {
			bonousCredit = 0.5;
		}
		const data = {
			spinData: {
				id: "001",
				slot_1: slot_1,
				slot_2: slot_2,
				slot_3: slot_3,
				time: new Date().toLocaleString("en-US"),
			},
			creditBonous: bonousCredit - 1,
		};
		dispatch(actions.saveGameData(data));
	};

	const onFeelLucky = () => {
		setSlot({
			slot_1: 7,
			slot_2: 7,
			slot_3: 7,
		});
		balanceUpdate(7, 7, 7);
	};

	const onSpinHandler = () => {
		const slot_1 = Math.floor(Math.random() * 9) + 1;
		const slot_2 = Math.floor(Math.random() * 9) + 1;
		const slot_3 = Math.floor(Math.random() * 9) + 1;
		setSlot({
			slot_1: slot_1,
			slot_2: slot_2,
			slot_3: slot_3,
		});
		balanceUpdate(slot_1, slot_2, slot_3);
	};

	return (
		<div className={classes["main-container"]}>
			<Slots slot_1={slot.slot_1} slot_2={slot.slot_2} slot_3={slot.slot_3} />
			<div className={classes["action-container"]}>
				<button onClick={onSpinHandler} className={classes["button"]}>
					SPIN
				</button>
				<button onClick={onFeelLucky} className={classes["button"]}>
					FEEL LUCKY
				</button>
				<button onClick={onCancelHandler} className={classes["button"]}>
					CANCEL
				</button>
			</div>
		</div>
	);
};

export default MagicNumber;
