import ModalSection from "../UI/ModalSection";
import MagicNumber from "./MagicNumber";
import { useDispatch } from "react-redux";
import { actions } from "../../store/store";

const Game = () => {
	const dispatch = useDispatch();
	const toggelPopHandler = () => {
		dispatch(actions.toggelPop());
	};

	return (
		<ModalSection onClick={toggelPopHandler}>
			<MagicNumber onClick={toggelPopHandler} />
		</ModalSection>
	);
};

export default Game;
