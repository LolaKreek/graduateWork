
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next'
import './style.css';
import GradientButton from '../../../layouts/GradientButton';
import AlternativeSystems from '../../../layouts/AlternativeSystems';
import { loginScheme } from '../formik/formikScheme';
import { styleInputs, styleLabels } from '../../../components/StylesVariable';
import { LoginUser } from '../../../services/auth';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
          login: '',
          password: '',
        },
        validationSchema: loginScheme,
        onSubmit: (values) => {
            try {
                LoginUser({login: values.login, password: values.password})
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <div className='login-page__main-wrapper'>
            <div className='login-page__main-form-headers'>
                <h2 className='login-main-form-headers__header'>{t('loginMainHeader')}</h2>
                <p className='login-main-form-headers__paragraph'>{t('loginUserLoginHeader')}</p>
            </div>

            <form className='login-page__form-wrapper' onSubmit={formik.handleSubmit}>
                <TextField
                    name="login"
                    label={t("loginFormEmail")}
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
                    label={t("loginFormPassword")}
                    type="password"
                    autoComplete='on'
                    variant="standard"
                    className='login-form__inputs'
                    value={formik.values.password}
                    sx={{ input: styleInputs, label: styleLabels }}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}/>
                <p className='login-form__forgot-password-link' onClick={() => navigate('/forgot-password')}>{t('loginFormForgotPassword')}</p>
                <GradientButton buttonName='login' option='submit'/>
            </form>

            <p className='login-form__alternative-login-systems' >{t('loginFromAltSystems')}</p>
            <AlternativeSystems />
            <p className='login-form__rejestration-link' onClick={() => {navigate('/register')}}>{t('registerLink')}</p>
        </div>
    );
};

export default LoginForm;