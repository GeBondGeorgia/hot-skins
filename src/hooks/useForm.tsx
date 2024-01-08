import React, { createElement} from "react";
import { useState } from "react";
import {FormAndInputI, ErrorType, FetchStatusTypes, InputGetArgs} from "../types/CommonTypes";



export default function useForm(dateTemplate: FormAndInputI ) {
	const [data, setData] = useState<FormAndInputI>(dateTemplate);
	const [dataKeys] = useState<string[]>(Object.keys(data));
	const [error, setError] = useState<ErrorType>({ noError: true });
	const [fetchStatus, setFetchStatus] = useState<FetchStatusTypes>(FetchStatusTypes.FETCH_NOT_STARTED);

	const dataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value.trim(),
		});
		if (error.noError === false) {
			inputValidator();
		}
	};

	const inputValidator = (): void => {
		const dataValues = Object.values(data);
		let accumulatedErrors = {
			noError: true,
		} as ErrorType;		
		const validateEmail = (email: string) => {
			return /\S+@\S+\.\S+/.test(email);
		};

		for (let i = 0; i < dataKeys.length; i++) {
			try {
				if (dataKeys[i] === "email" && !validateEmail(dataValues[i])) {
					throw new Error("Please write a valid email");
				}

				if (dataValues[i] === "") {
					throw new Error("Please write something");
				}
			} catch (error ) {
				if  (error instanceof Error) { 
					accumulatedErrors = {
						...accumulatedErrors,
						noError: false,
						[dataKeys[i]]: [error.message],
					};
				}
			}
		}

		setError(accumulatedErrors);
	};


	const dataSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	
		inputValidator();

		setFetchStatus(FetchStatusTypes.FETCH_SUCCESS);
	};

	const inputGet = ( {placeholder, classAdd = {}, elementTypes = {}}: InputGetArgs): JSX.Element => {
		return (
			<div className="form__inputs">
				{dataKeys.map((item: string) => {
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
								onChange: (e: React.ChangeEvent<HTMLInputElement>) => dataChange(e),
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

	
	return { dataSubmit, inputGet, fetchStatus };
}

// Comment finish validate
