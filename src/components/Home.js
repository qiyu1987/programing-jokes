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
		<div className="container d-flex justify-content-center">
			<div className="jumbotron my-5">
				<h1 className="setup">{props.joke.setup}</h1>
				{reveal ? <h2 className="punchline">{props.joke.punchline}</h2> : null}
			</div>
		</div>
	)
	// 	<div class="container h-100 d-flex justify-content-center">
	//     <div class="jumbotron my-auto">
	//       <h1 class="display-3">Hello, world!</h1>
	//     </div>
	//  </div>
}
const mapStateToProps = state => ({
	joke: state.joke
})
export default connect(mapStateToProps, { loadJoke })(Home)
