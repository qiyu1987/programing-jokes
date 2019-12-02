import React, { useEffect, useState } from "react"
import { loadJoke } from "../actions/joke"
import { connect } from "react-redux"

function Home(props) {
	const [reveal, setReveal] = useState(false)
	useEffect(() => {
		props.loadJoke()
		setTimeout(() => {
			setReveal(true)
		}, 3000)
	})
	return (
		<div>
			<div className="setup">{props.joke.setup}</div>
			{reveal ? <div className="punchline">{props.joke.punchline}</div> : null}
		</div>
	)
}
const mapStateToProps = state => ({
	joke: state.joke
})
export default connect(mapStateToProps, { loadJoke })(Home)
