import React from "react"
import store from "./store"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import Home from "./components/Home"

function App() {
	return (
		<Provider store={store}>
			<div>
				<h1>App</h1>
				<Route path="/" exact component={Home} />
			</div>
		</Provider>
	)
}

export default App
