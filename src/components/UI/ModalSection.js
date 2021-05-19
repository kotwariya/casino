import classes from "./ModalSection.module.scss";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	return <div className={classes["backdrop"]} onClick={props.onClick}></div>;
};

const Modal = (props) => {
	return <div className={classes["modal-content"]}>{props.children}</div>;
};

const ModalSection = (props) => {
	const portalElement = document.getElementById("overlay");

	return (
		<div className={classes["modal-section"]}>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				portalElement
			)}
			{ReactDOM.createPortal(<Modal>{props.children}</Modal>, portalElement)}
		</div>
	);
};

export default ModalSection;
