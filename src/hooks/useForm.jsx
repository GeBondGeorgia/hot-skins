import { useState } from "react";

const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};

export default function useForm(names) {
	const [data, setData] = useState(
		names.reduce((acc, name) => ({ ...acc, [name]: "" }), {})
	);
	const [errorInData, setErrorInData] = useState();

	const dataChange = (e) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value,
		});
	};

	const dataSubmit = (e) => {
		e.preventDefault();
	};
	return [data, dataChange, dataSubmit];
}

// Comment finish validate