import React, { useEffect, useState } from "react"
import styled from "styled-components"
// load and connect action, state to redux
import { loadJoke } from "../actions/joke"
import { connect } from "react-redux"
// styled component SetUp and Punchline
const SetUp = styled.div`
	background-color: #e9ecef;
	border-radius: 0.3rem;
	text-align: center;
	padding: 4rem 2rem;
	margin: 2rem;
`
const Punchline = styled.div`
	background-color: #e9ecef;
	border-radius: 0.3rem;
	text-align: center;
	padding: 4rem 2rem;
	margin: 4rem;
`

function Home(props) {
	// use state hook, whether to reveal punchline of a joke
	const [reveal, setReveal] = useState(false)
	// loadJoke action to fetch random joke from API
	// after 5 seconds set reveal to true to reveal the punchline
	useEffect(() => {
		props.loadJoke()
		setTimeout(() => {
			setReveal(true)
		}, 5000)
	})
	// when the joke setup is ready in state, display setup
	// when reveal is true, display punchline
	return (
		<div>
			{props.joke.setup ? (
				<SetUp>
					<h2>{props.joke.setup}</h2>
				</SetUp>
			) : null}
			{reveal ? (
				<Punchline>
					<h3>{props.joke.punchline}</h3>
				</Punchline>
			) : null}
		</div>
	)
}
// injecting joke from redux state
const mapStateToProps = state => ({
	joke: state.joke
})
// export connected component
export default connect(mapStateToProps, { loadJoke })(Home)
