import React, { useEffect } from "react"
import SetUp from "./SetUp"
import { loadJoke } from "../actions/joke"
import { connect } from "react-redux"

function Home(props) {
	useEffect(() => {
		props.loadJoke()
	})
	return (
		<div>
			<h1>Home</h1>
			<SetUp />
		</div>
	)
}
const mapStateToProps = state => ({
	joke: state.joke
})
export default connect(mapStateToProps, { loadJoke })(Home)
