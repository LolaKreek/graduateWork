import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import GradientButton from "../../layouts/GradientButton";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import '../../features/auth/components/style.css'
import './style.css';
import { styleInputs, styleLabels } from "../../components/StylesVariable";
import AlternativeSystems from "../../layouts/AlternativeSystems";
import { registerScheme } from "../../features/auth/formik/formikScheme";

const RegisterPage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          userName: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          location: ''
        },
        validationSchema: registerScheme,
        onSubmit: (values) => {
            try {
                console.log("Register login", values);
            } catch (error) {
                console.error(error);
            }
        },
    });

    return(
    <>
        <h1 className="login-page__main-header">{t('registerPageFor')}</h1>

        <div className='register-page__main-wrapper'>
            <div className='login-page__main-form-headers'>
                <h2 className='login-main-form-headers__header'>{t('registerMainHeader')}</h2>
                <p className='login-main-form-headers__paragraph'>{t('registerSecondHeader')}</p>
            </div>

            <form className='login-page__form-wrapper' onSubmit={formik.handleSubmit}>
                <TextField
                    name="userName"
                    label={t("registerUserName")}
                    variant="standard"
                    autoComplete='on'
                    type="text"
                    className='login-form__inputs'
                    value={formik.values.userName}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.userName && Boolean(formik.errors.userName)}
                    helperText={formik.touched.userName && formik.errors.userName}/>
                <TextField
                    name="firstName"
                    label={t("registerUserFirstName")}
                    type="text"
                    autoComplete='on'
                    variant="standard"
                    className='login-form__inputs'
                    value={formik.values.firstName}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}/>
                <TextField
                    name="lastName"
                    label={t("registerUserLastName")}
                    type="text"
                    autoComplete='on'
                    variant="standard"
                    className='login-form__inputs'
                    value={formik.values.lastName}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}/>
                <TextField
                    name="phoneNumber"
                    label={t("registerUserPhoneNumber")}
                    type="text"
                    autoComplete='on'
                    variant="standard"
                    className='login-form__inputs'
                    value={formik.values.phoneNumber}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}/>
                <TextField
                    name="email"
                    label={t("registerUserEmail")}
                    type="text"
                    autoComplete='on'
                    variant="standard"
                    className='login-form__inputs'
                    value={formik.values.email}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}/>
                <TextField
                    name="location"
                    label={t("registerUserLocation")}
                    type="text"
                    autoComplete='on'
                    variant="standard"
                    className='login-form__inputs'
                    value={formik.values.location}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.location && Boolean(formik.errors.location)}
                    helperText={formik.touched.location && formik.errors.location}/>
                <GradientButton buttonName="register" className="register__button" option='submit'/>

                <p className='login-form__alternative-login-systems' >{t('registerFromAltSystems')}</p>
                <AlternativeSystems />
                <p className='login-form__rejestration-link' onClick={() => {navigate('/login')}}>{t('loginLink')}</p>
            </form>
        </div>
    </>
    )
}

export default RegisterPage;