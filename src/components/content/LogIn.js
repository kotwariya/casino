import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/store";
import ModalSection from "../UI/ModalSection";
import classes from "./LogIn.module.scss";

const LogIn = () => {
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const onChangeHandler = (event) => {
		setName(event.target.value);
	};
	const onSubmitHandler = () => {
		dispatch(actions.userLoggedIn(name));
		dispatch(actions.toggelLogIn());
	};

	return (
		<ModalSection onClick={() => dispatch(actions.toggelLogIn())}>
			<form className={classes.form} onSubmit={onSubmitHandler}>
				<input
					placeholder="Please enter your name..."
					type="text"
					value={name}
					onChange={onChangeHandler}
				/>
				<button>Enter</button>
			</form>
		</ModalSection>
	);
};

export default LogIn;
