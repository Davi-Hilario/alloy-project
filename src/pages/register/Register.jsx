import api from "../../api/api";
import { useState } from "react";
import style from "./Register.module.css";
import Form from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/inputs/formInput/FormInput";

function Register() {
	let [loginValue, setLoginValue] = useState("");
	let [passwordValue, setPasswordValue] = useState("");
	let [nameValue, setNameValue] = useState("");
	const navigate = useNavigate();

	function handleSubmit() {
		api
			.post("/users", {
				name: nameValue,
				email: loginValue,
				password: passwordValue,
			})
			.then((response) => {
				console.log(response.data);
				alert("Account Created!");
				navigate("/login");
			})
			.catch((err) => {
				alert("Unable to create the account: " + err);
				console.log(err);
			});
	}

	return (
		<div className={style["Register"]}>
			<div className={style["container"]}>
				<Form
					title='REGISTER'
					formHeight='35rem'
					goBack={() => navigate("/")}
					changeForm={() => navigate("/login")}
					onClickSubmit={handleSubmit}
					buttonValue='Register'
					subText='Already registered? '
					subTextLink='Login in'
					formInput={[
						<FormInput
							fieldName='Name'
							height='35%'
							placeholder='Your name here'
							onChange={(e) => {
								setNameValue(e.target.value);
							}}
						/>,
						<FormInput
							fieldName='Email'
							height='35%'
							placeholder='Your email here'
							onChange={(e) => {
								setLoginValue(e.target.value);
							}}
						/>,
						<FormInput
							fieldName='Password'
							height='35%'
							placeholder='Your password here'
							onChange={(e) => {
								setPasswordValue(e.target.value);
							}}
						/>,
					]}
				/>
			</div>
		</div>
	);
}

export default Register;
