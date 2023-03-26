import { MenuItem } from "@mui/material";
import './style.css';

const Menu = () => {
    const menuList = { list: [
        {id: 1, href: '/', text: 'Strona Główna'},
        {id: 2, href: '/quiz', text: 'Quiz'},
        {id: 3, href: '/instruction', text: 'Instrukcja'},
        {id: 4, href: '/profile', text: 'Profil'},
        {id: 5, href: '/login', text: 'Zaloguj się'},
        {id: 6, href: '/registration', text: 'Zarejestruj się'}
    ]}

    return(
        <nav className="main-wrapper__menu menu">
            <div className="menu__flex-wrapper">
                <div className="menu__container-initials">
                    <p className='menu__initials'>L.K.</p> 
                </div>

                <div className="menu__menu-list-wrapper">
                    <MenuItem>Strona Główna</MenuItem>
                    <MenuItem>Quiz</MenuItem>
                    <MenuItem>Instrukcja</MenuItem>
                    <MenuItem>Profil</MenuItem>
                    <MenuItem>Zaloguj się</MenuItem>
                </div>
            </div>
        </nav>
    );
}

export default Menu;