import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import GradientButton from "../../layouts/GradientButton";
import { useFormik } from "formik";
import { styleInputs, styleLabels } from "../../components/StylesVariable";
import { forgotScheme } from "../../features/auth/formik/formikScheme";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            recoweryPassword: '',
        },
        validationSchema: forgotScheme,
        onSubmit: (values) => {
            try {
                console.log("Submit login", values);
            } catch (error) {
                console.error(error);
            }
        },
    });

    return(
        <>
        <h1 className="login-page__main-header">{t('forgotPasswordHeader')}</h1>

        <div className='login-page__main-wrapper'>
            <div className='login-page__main-form-headers'>
                <h2 className='login-main-form-headers__header'>{t('forgotPasswordMainHeader')}</h2>
                <p className='login-main-form-headers__paragraph'>{t('forgotPasswordSecondHeader')}</p>
            </div>

            <form className='login-page__form-wrapper' onSubmit={formik.handleSubmit}>
                <TextField
                    name="login"
                    label={t("recoveryPasswordLogin")}
                    variant="standard"
                    autoComplete='on'
                    type="text"
                    className='login-form__inputs'
                    value={formik.values.login}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.login && Boolean(formik.errors.login)}
                    helperText={formik.touched.login && formik.errors.login}/>
                <TextField
                    name="password"
                    label={t("recoveryPassword")}
                    variant="standard"
                    autoComplete='on'
                    type="password"
                    className='login-form__inputs'
                    value={formik.values.password}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}/>
                <TextField
                    name="recoweryPassword"
                    label={t("recoveryPasswordComfirm")}
                    type="password"
                    autoComplete='on'
                    variant="standard"
                    className='login-form__inputs'
                    value={formik.values.recoweryPassword}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.recoweryPassword && Boolean(formik.errors.recoweryPassword)}
                    helperText={formik.touched.recoweryPassword && formik.errors.recoweryPassword}/>
                <GradientButton className='forgot__password' buttonName='regainPassword' option='submit'/>
                </form>

                <p className='login-form__rejestration-link' onClick={() => {navigate('/login')}}>{t('loginLink')}</p>
            </div>
        </>
    )
}

export default ForgotPassword