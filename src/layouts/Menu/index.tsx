import { MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ChangeLanguage from "../../components/ChangeLanguage";
import './style.css';
import { useEffect, useState } from "react";
import { styleMenu, styleMenuLanguage } from "../../components/StylesVariable";

const Menu = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        console.log(window.location.pathname)
    }, [window.location.pathname])

    return(
        <nav className="main-wrapper__menu menu">
            <div className="menu__flex-wrapper">
                <div className="menu__container-initials">
                    <p className='menu__initials'>L.K.</p> 
                </div>

                <div className="menu__menu-list-wrapper">
                    <MenuItem className={window.location.pathname == '/' ? 'active__left' : ''} sx={styleMenu} onClick={()=>{navigate('/')}}>{t("menuHomepage")}</MenuItem>
                    <MenuItem className={window.location.pathname == '/quiz' ? 'active' : ''} sx={styleMenu} onClick={()=>{navigate('/quiz')}}>{t("menuQuiz")}</MenuItem>
                    <MenuItem className={window.location.pathname == '/instruction' ? 'active' : ''} sx={styleMenu} onClick={()=>{navigate('/instruction')}}>{t("menuInstruction")}</MenuItem>
                    <MenuItem className={window.location.pathname == '/profile' ? 'active' : ''} sx={styleMenu} onClick={()=>{navigate('/profile')}}>{t("menuProfile")}</MenuItem>
                    <MenuItem className={window.location.pathname == '/login' ? 'active' : ''} sx={styleMenu} onClick={()=>{navigate('/login')}}>{t("menuLogin")}</MenuItem>

                    <MenuItem sx={styleMenuLanguage}><ChangeLanguage /></MenuItem>
                </div>
            </div>
        </nav>
    );
}

export default Menu;