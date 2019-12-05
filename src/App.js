import React from "react"
import store from "./store"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import Home from "./components/Home"

function App() {
	return (
		<Provider store={store}>
			<Route path="/" exact component={Home} />
		</Provider>
	)
}

export default App
