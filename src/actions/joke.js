import request from "superagent"
import { externalUrl } from "../constants"
export const JOKE_FETCHED = "JOKE_FETCHED"
const jokeFetched = joke => ({
	type: JOKE_FETCHED,
	payload: joke
})
export const loadJoke = () => (dispatch, getState) => {
	if (Object.keys(getState().joke).length !== 0) return
	request(externalUrl)
		.then(res => {
			dispatch(jokeFetched(res.body[0]))
		})
		.catch(console.error)
}
