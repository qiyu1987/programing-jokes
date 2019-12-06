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
			<div className="container d-flex justify-content-center">
				<div className="jumbotron my-5">
					<h2 className="setup">{props.joke.setup}</h2>
					{reveal ? (
						<h3 className="punchline">{props.joke.punchline}</h3>
					) : null}
				</div>
			</div>
		</div>
	)
}
const mapStateToProps = state => ({
	joke: state.joke
})
export default connect(mapStateToProps, { loadJoke })(Home)
