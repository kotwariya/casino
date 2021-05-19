import NavBar from "./components/header/NavBar";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Game from "./components/content/Game";
import LogIn from "./components/content/LogIn";
import { useSelector } from "react-redux";

function App() {
	const isPopEnable = useSelector((state) => state.popUpEnable);
	const isLogInEnable = useSelector((state) => state.logInEnable);
	return (
		<>
			{isLogInEnable && <LogIn />}
			{isPopEnable && <Game />}
			<NavBar />
			<Content />
			<Footer />
		</>
	);
}

export default App;
