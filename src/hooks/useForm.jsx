import {createElement} from "react";
import { useState } from "react";


export default function useForm(keys) {
	const [data, setData] = useState(
		keys.reduce((acc, key) => ({ ...acc, [key]: "" }), {})
	);
	const [error, setError] = useState({ noError: true });
	const [fetchStatus, setFetchStatus] = useState(" ");
	const [checkmarkClassName, setCheckmarkClassName] =  useState("");

	const dataChange = (e) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value.trim(),
		});
		if (error.noError === false) {
			inputValidator();
		}
	};

	const inputValidator = () => {
		const dataValues = Object.values(data);
		let accumulatedErrors = {
			noError: true,
		};
		const validateEmail = (email) => {
			return /\S+@\S+\.\S+/.test(email);
		};

		for (let i = 0; i < keys.length; i++) {
			try {
				if (keys[i] === "email" && !validateEmail(dataValues[i])) {
					throw new Error("Please write a valid email");
				}

				if (dataValues[i] === "") {
					throw new Error("Please write something");
				}
			} catch (e) {
				accumulatedErrors = {
					...accumulatedErrors,
					noError: false,
					[keys[i]]: [e.message],
				};
			}
		}

		setError(accumulatedErrors);
	};


	const showCheckmark = () =>  {
		if (fetchStatus === "success")  {
			setCheckmarkClassName("reg__checkmark--active")
			setTimeout(() => { 
				setCheckmarkClassName("")
			}, 2000)
		} else {
			setCheckmarkClassName("");
		}
	}

	const dataSubmit = async (e) => {
		e.preventDefault();

		inputValidator();

		setFetchStatus("success");

		showCheckmark();
	};

	const inputGet = (placeholder, classAdd = [], elementTypes = []) => {
		return (
			<div className="form__inputs">
				{keys.map((item) => {
					let type;
					if (item === "email") { 
						type = "email";
					} else if (item === "password") {
						type = "password";
					}


					return (
						<div className={`form__input ${(classAdd[item] ? classAdd[item] : "")}`} key={item}>
							{createElement(elementTypes[item] || "input",  {
								type: type || item,
								onChange: (e) => dataChange(e),
								className: `form__field small ${(elementTypes[item] ? "form__field--" + elementTypes[item] :  "")}`,
								name: item,
								placeholder: placeholder[item],
							})}
							{/* COMMENT to finish password input */}
							{/* {type === "password" ? <img src="" alt=""/> : null} */}
							<div className="input__error-message small">
								{error[item]}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	
	return { dataSubmit, inputGet, checkmarkClassName };
}

// Comment finish validate
