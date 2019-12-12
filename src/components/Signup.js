import React from "react"
import useForm from "react-hook-form"
import { connect } from "react-redux"
import { signUp } from "../actions/auth"

function Signup(props) {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = data => {
		props.signUp(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			{/* include validation with required or other standard HTML validation rules */}
			<input
				name="username"
				defaultValue="username"
				ref={register({ required: true })}
			/>
			{/* errors will return when field validation fails  */}
			{errors.username && <span>username is required</span>}

			<input
				name="password"
				defaultValue="password"
				ref={register({ required: true })}
			/>
			{errors.password && <span>password is required</span>}

			<input type="submit" />
		</form>
	)
}
export default connect(null, { signUp })(Signup)
