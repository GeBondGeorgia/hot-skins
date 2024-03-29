import logoImg from "../../assets/logo/logo.svg";
import hotSkinsImg from "../../assets/logo/HotSkins.svg";
import useForm from "../../hooks/useForm";

import "./authorization.scss";
import { FC } from "react";

const Authorization: FC = () => {
	const { dataSubmit, inputGet } = useForm({ email: "", password: "" });

	return (
		<div className="authorization" >
			<div className="logo">
				<div className="logo__wrapper">
					<img src={logoImg} alt="Logo" className="logo__img" />
				</div>
				<div className="logo__wrapper">
					<img
						src={hotSkinsImg}
						alt="Hot Skins"
						className="logo__title"
					/>
				</div>
			</div>
			<form className="form" onSubmit={dataSubmit}>
			{inputGet({
          placeholder: { email: "Ваш email", password: "Пароль" },
        })}				<div className="button__wrapper">
					<input
						type="submit"
						className="button form__button authorization__button"
						value={"Войти"}
					/>
				</div>
			</form>
		</div>
	);
};

export default Authorization;
