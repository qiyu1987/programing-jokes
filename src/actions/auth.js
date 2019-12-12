import { localUrl } from "../constants"
import request from "superagent"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const signUp = user => (dispatch, getState) => {
	request
		.post(`${localUrl}/users`)
		.send(user)
		.then(res => {
			console.log(res.body)
			dispatch({
				type: SIGN_UP_SUCCESS
			})
		})
		.catch(console.error)
}
