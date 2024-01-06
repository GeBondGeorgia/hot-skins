import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import regLogoImg from "../../assets/images/regLogo.svg";

import "./regPage.scss";
import useForm from "../../hooks/useForm";

const RegPage = () => {
	const [data, dataChange, dataSubmit] = useForm(["name",
        "email",
        "siteAdress",
        "contacts"] );
	return (
		<div className="reg">
			<Header />
			<div className="reg__promo">
				<div className="promo__img">
					<img src={regLogoImg} alt="Regestration logo" />
				</div>
				<form  className="form" onSubmit={dataSubmit}>
					<h2 className="form__title title">Заявка на подключение</h2>
					<div className="form__inputs">
						<input
							type="text medium"
							onChange={(e) => dataChange(e)}
							className="form__input"
							name="name"
							placeholder="Ваше имя"
						/>
						<input
							type="email medium"
							onChange={(e) => dataChange(e)}
							className="form__input"
							name="email"
							placeholder="Ваш email"
                            
						/>
						<input
							type="text medium"
							onChange={(e) => dataChange(e)}
							className="form__input"
							name="siteAdress"
							placeholder="Адрес сайта"
						/>
						<input
							type="text medium"
							onChange={(e) => dataChange(e)}
							className="form__input"
							name="contacts"
							placeholder="Ваши контакты (Телефон, Telegram, WhatsApp...)"
						/>
					</div>
					<div className="button__wrapper">
						<input
							type="submit"
							value="Отправить заявку"
							className="button form__button"
						/>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default RegPage;
