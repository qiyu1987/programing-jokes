import React from "react"
import styled from "styled-components"
import { ReactComponent as Share } from "../share.svg"
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
`
const NavCenter = styled.div`
	width: 33.333%;
	text-align: center;
`
const NavRight = styled.div`
	width: 33.333%;
	text-align: right;
	svg {
		margin-right: 20px;
	}
`
const MenuLink = styled.a``
function Header() {
	return (
		<Nav>
			<NavHeader>
				<NavLeft>
					<Monkey />
				</NavLeft>
				<NavCenter>Programing Jokes</NavCenter>
				<NavRight>
					<MenuLink href="#">
						<Share />
					</MenuLink>
				</NavRight>
			</NavHeader>
		</Nav>
	)
}
export default Header
