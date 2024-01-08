import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import regLogoImg from "../../assets/images/regLogo.svg";
import checkmark from "../../assets/images/checkmark.png";

import "./regPage.scss";
import useForm from "../../hooks/useForm";

import { FC } from "react";


const RegPage: FC = () => {
  const { dataSubmit, inputGet } = useForm({
    name: "",
    email: "",
    siteAdress: "",
    contacts: ""
});

  return (
    <div className="reg">
      <div className={`reg__checkmark`}>
        <img src={checkmark} alt="Checkmark indicating successful registration" />
      </div>
      <Header />
      <div className="reg__container container">
        <div className="reg__wrapper">
          <div className="reg__promo">
            <img
              className="reg__img"
              src={regLogoImg}
              alt="Registration logo"
            />
            <div className="form__wrapper">
              <h2 className="form__title title">
                Заявка на подключение
              </h2>
              <form className="form" onSubmit={dataSubmit}>
                {
                  inputGet(
                    {
                      placeholder:  {
                        name: "Ваше имя",
                        email: "Ваш email",
                        siteAdress: "Адрес сайта",
                        contacts: "Ваши контакты (WhatsApp,теле..)",
                      }, 
                      classAdd: { contacts: "form__input--textarea" },
                      elementTypes: { contacts: "textarea" },
                    }
                  )
                }
                

                <div className="button__wrapper">
                  <input
                    type="submit"
                    value="Отправить заявку"
                    className="button form__button"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegPage;
