// import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import lang from "../../images/button/russia.png";
import arrow from "../../images/button/arrow-down.svg";

import "./header.scss";
const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<ul className="header__items">
					<li className="header__item header__item--left">
						{
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
						}<a href="#" className="header__logo">
							<img src={logo} alt="logo" />
						</a>
						<ul className="header__information">
							<li className="information__item">Помощь</li>
							<li className="information__item">Контакты</li>
						</ul>
					</li>
					<li className="header__item header__buttons">
						<button className="button--list">
							<div>
								<img src={lang} alt="lang" />
							</div>
							RU
							{/* <div className="arrow arrow--down"></div> */}
							<img src={arrow} alt="arrow" />
						</button>
						<button className="button">Войти</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

// COMMENT FINISH button lang list arrow
// COMMENTthink to change header semantics
export default Header;
