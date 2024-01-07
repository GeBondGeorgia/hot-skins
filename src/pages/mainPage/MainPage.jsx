import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./mainPage.scss";

const MainPage = () => { 
    return ( 
        <div className="main">
            <Header/>
            <div className="promo">
			<div className="container">
               
				<h1 className="promo__title title title--biggest">
					Принимайте платежи от пользователей 
                    <br />
                    с помощью скинов CS:GO и DOTA 2
				</h1>
				<button className="promo__button button">
					Подключить проект
				</button>
			</div>
            </div>
            <Footer/>
        </div>

    );
}
// COMMENT change "main" display to flex 
// and align "Header", "Promo", "Footer" 
// by align-self
export default MainPage;