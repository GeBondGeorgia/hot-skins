// import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import lang from "../../images/button/russia.png";
import arrow from "../../images/button/arrow-down.svg";

import "./header.scss";
const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="nav">
						<a href="#!" className="logo">
							<img src={logo} alt="logo" />
						</a>

						<ul className="nav__list">
							<li className="nav__item medium">Помощь</li>
							<li className="nav__item medium">Контакты</li>
						</ul>
					</div>

					<div className="header__buttons">
						<button className="header__button--list header__button button button--list medium">
							<img src={lang} alt="lang" />
							RU
							<img src={arrow} alt="" />
						</button>
						<a href="#!" className="button">
							Войти
						</a>
					</div>
				</div>
			</div>
		</div>

	);
};

// COMMENT FINISH button lang list arrow
// COMMENTthink to change header semantics
export default Header;
