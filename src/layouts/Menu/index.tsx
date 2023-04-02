import { MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ChangeLanguage from "../../components/ChangeLanguage";
import './style.css';

const Menu = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    return(
        <nav className="main-wrapper__menu menu">
            <div className="menu__flex-wrapper">
                <div className="menu__container-initials">
                    <p className='menu__initials'>L.K.</p> 
                </div>

                <div className="menu__menu-list-wrapper">
                    <MenuItem onClick={()=>{navigate('/')}}>{t("menuHomepage")}</MenuItem>
                    <MenuItem onClick={()=>{navigate('/quiz')}}>{t("menuQuiz")}</MenuItem>
                    <MenuItem onClick={()=>{navigate('/instruction')}}>{t("menuInstruction")}</MenuItem>
                    <MenuItem onClick={()=>{navigate('/profile')}}>{t("menuProfile")}</MenuItem>
                    <MenuItem onClick={()=>{navigate('/login')}}>{t("menuLogin")}</MenuItem>

                    <MenuItem><ChangeLanguage /></MenuItem>
                </div>
            </div>
        </nav>
    );
}

export default Menu;