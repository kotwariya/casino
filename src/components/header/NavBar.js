import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/store";

import classes from "./NavBar.module.scss";

const NavBar = () => {
	const dispatch = useDispatch();

	const { balance, isLoggedIn, name } = useSelector((state) => state.user);

	const toggelPopHandler = () => {
		dispatch(actions.toggelPop());
	};

	const onToggelLogIn = () => {
		dispatch(actions.toggelLogIn());
	};

	const logOutHandler = () => {
		dispatch(actions.userLoggedOut());
		localStorage.removeItem("state");
	};

	return (
		<>
			<nav className={classes["main-nav"]}>
				<h3 className={classes["logo"]}>Royal Casino</h3>

				<ul>
					{isLoggedIn && (
						<li>
							<p>{name}</p>
						</li>
					)}
					{!isLoggedIn && (
						<li>
							<button onClick={onToggelLogIn}>Login</button>
						</li>
					)}
					{!isLoggedIn && (
						<li>
							<button onClick={toggelPopHandler}>Guest Play</button>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<button onClick={logOutHandler}>Logout</button>
						</li>
					)}

					<li>
						<p>{`$ ${balance}`}</p>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
