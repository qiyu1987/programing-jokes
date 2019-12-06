import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { loadJoke } from "../actions/joke"
import { connect } from "react-redux"

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
	const [reveal, setReveal] = useState(false)
	useEffect(() => {
		props.loadJoke()
		setTimeout(() => {
			setReveal(true)
		}, 5000)
	})
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
const mapStateToProps = state => ({
	joke: state.joke
})
export default connect(mapStateToProps, { loadJoke })(Home)
