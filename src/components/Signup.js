import React from "react"
import useForm from "react-hook-form"
import { connect } from "react-redux"
import { signUp } from "../actions/auth"

function Signup(props) {
	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = data => {
		console.log(data)
		props.signUp(data)
	}

	console.log(watch("username")) // watch input value by passing the name of it

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<input
				name="username"
				defaultValue="username"
				ref={register({ required: true })}
			/>
			{errors.username && <span>username is required</span>}

			{/* include validation with required or other standard HTML validation rules */}
			<input
				name="password"
				defaultValue="password"
				ref={register({ required: true })}
			/>
			{/* errors will return when field validation fails  */}
			{errors.password && <span>password is required</span>}

			<input type="submit" />
		</form>
	)
}
export default connect(null, { signUp })(Signup)
