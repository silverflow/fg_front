import React from "react";
import Main from "./pages/main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Route component={Main} path={"/"} exact />
			<Route component={Login} path={"/login"} />
			<Route component={Register} path={"/register"} />
		</>
	);
};

export default App;
