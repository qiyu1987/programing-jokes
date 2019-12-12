import { localUrl } from "../constants"
import request from "superagent"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const signUp = user => {
	request.post(localUrl)
}
