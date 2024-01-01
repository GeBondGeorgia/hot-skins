import "./promo.scss";

const Promo = () => {
    return ( 
        <div className="promo">
            <div className="container">
            <h1 className="promo__title title title--biggest">
                    Принимайте платежи 
                    <br />
                    от пользователей
                    <br />
                    с помощью скинов
                    <br /> 
                    CS:GO и DOTA 2
                </h1>
                <button className="promo__button button">Подключить проект</button>
            </div>
        </div>

    )
};

export default Promo;