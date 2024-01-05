import Header from "../../components/header/Header";
import Promo from "../../components/promo/Promo";
import Footer from "../../components/footer/Footer";

import "./mainPage.scss";

const MainPage = () => { 
    return ( 
        <div className="main">
            <Header/>
            <Promo/>
            <Footer/>
        </div>

    );
}
// COMMENT change "main" display to flex 
// and align "Header", "Promo", "Footer" 
// by align-self
export default MainPage;