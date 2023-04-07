import LoginForm from "../../features/auth/components/LoginForm";
import './style.css';
import { useTranslation } from "react-i18next";

const Login = () => {
    const {t} = useTranslation();

    return(
        <div>
            <h1 className="login-page__main-header">{t('pageForlogin')}</h1>
            <LoginForm />
        </div>
    )
}

export default Login;