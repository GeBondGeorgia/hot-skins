import Header from "../../components/header/Header";
import Promo from "./promo/Promo";
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

export default MainPage;