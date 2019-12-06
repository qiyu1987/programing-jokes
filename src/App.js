import React from "react"
import store from "./store"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"

function App() {
	return (
		<Provider store={store}>
			<Route path="/" component={Header} />
			<Route path="/" exact component={Home} />
		</Provider>
	)
}

export default App
