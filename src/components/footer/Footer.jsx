import "./footer.scss";

const Footer = ( ) => {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <p className="footer__item">Copyright © Skincash.ru</p>
                    <ul className="footer__items">
                        <h4 className="footer__item">Помощь</h4>
                        <h4 className="footer__item">Контакты</h4>
                        <h4 className="footer__item">Пользовательское соглашение</h4>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer;