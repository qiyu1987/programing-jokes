import { JOKE_FETCHED } from "../actions/joke"
export default (state = {}, action = {}) => {
	switch (action.type) {
		case JOKE_FETCHED:
			return action.payload
		default:
			return state
	}
}
