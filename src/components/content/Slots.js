import classes from "./Slots.module.scss";
import CountUp from "react-countup";

const Slots = ({ slot_1, slot_2, slot_3 }) => {
	return (
		<div className={classes["number-container"]}>
			<div className={classes["number-window"]}>
				<CountUp start={1} end={slot_1} duration={2} />
			</div>
			<div className={classes["number-window"]}>
				<CountUp start={1} end={slot_2} duration={4} />
			</div>
			<div className={classes["number-window"]}>
				<CountUp start={1} end={slot_3} duration={6} />
			</div>
		</div>
	);
};

export default Slots;
