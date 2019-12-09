import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { FacebookShareButton, FacebookIcon } from "react-share"
import { ReactComponent as Monkey } from "../monkey.svg"
const Nav = styled.div`
	background-color: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`
const NavHeader = styled.div`
	max-width: 1010px;
	padding: 10px 20px;
	width: 100%;
	display: flex;
	align-items: center;
	margin: 0 auto;
	font-size: x-large;
`
const NavLeft = styled.div`
	width: 33.333%;
	text-align: left;
	padding-left: 20px;
`
const NavCenter = styled.div`
	width: 33.333%;
	text-align: center;
`
const NavRight = styled.div`
	width: 33.333%;
	display: flex;
	justify-content: flex-end;
	padding-right: 20px;
`
const MenuLink = styled.a``
function Header(props) {
	return (
		<Nav>
			<NavHeader>
				<NavLeft>
					<Monkey />
				</NavLeft>
				<NavCenter>Programing Jokes</NavCenter>
				<NavRight>
					<MenuLink href="#">
						<FacebookShareButton
							url="http://facebook.com"
							quote={`${props.joke.setup} 
							${props.joke.punchline}`}
							hashtag="#programing joke"
						>
							<FacebookIcon logoFillColor="white" />
						</FacebookShareButton>
					</MenuLink>
				</NavRight>
			</NavHeader>
		</Nav>
	)
}
const mapStateToProps = state => ({
	joke: state.joke
})
export default connect(mapStateToProps)(Header)
