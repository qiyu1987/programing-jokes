import React from "react"
import store from "./store"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Signup from "./components/Signup"

function App() {
	return (
		<Provider store={store}>
			<Route path="/" component={Header} />
			<Route path="/" exact component={Home} />
			<Route path="/signup" exact component={Signup} />
		</Provider>
	)
}

export default App
