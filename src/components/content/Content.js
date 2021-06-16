import classes from "./Content.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/store";

const Content = () => {
	let games = useSelector((state) => state.user.games);

	// if (games.length === 0) {
	// 	const localStorageState = JSON.parse(localStorage.getItem("state"));
	// 	games = localStorageState.user.games;
	// }
	const dispatch = useDispatch();
	const toggelPopHandler = () => {
		dispatch(actions.toggelPop());
	};
	return (
		<div className={classes["container"]}>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>SLOT 1</th>
						<th>SLOT 2</th>
						<th>SLOT 3</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{games.map((row) => {
						return (
							<tr key={row.time}>
								<td>{row.id}</td>
								<td>{row.slot_1}</td>
								<td>{row.slot_2}</td>
								<td>{row.slot_3}</td>
								<td>{row.time}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className={classes.actions}>
				<button onClick={toggelPopHandler}>PLAY GAME</button>
			</div>
		</div>
	);
};

export default Content;
