import { FC } from "react";
import "./footer.scss";

const Footer: FC = ( ) => {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <p className="footer__item">Copyright © Skincash.ru</p>
                    <ul className="footer__items">
                        <li className="footer__item medium">Помощь</li>
                        <li className="footer__item medium">Контакты</li>
                        <li className="footer__item medium">Пользовательское соглашение</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer;