import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const loginScheme = yup.object({
    login: yup.string()
        .min(2, 'Login is too short')
        .max(20, 'Login is too long')
        .required('Required login'),
    password: yup.string()
        .min(8, 'Password must contain at least 8 characters')
        .required('Required password'),
});

export const registerScheme = yup.object({
    userName: yup.string()
        .min(2, 'User name is too short')
        .max(20, 'User name is too long')
        .required('Required user name'),
    firstName: yup.string()
        .min(2, 'First name is too short')
        .max(20, 'First name is too long')
        .required('Required first name'),
    lastName: yup.string()
        .min(2, 'Last name is too short')
        .max(20, 'Last name is too long')
        .required('Required last name'),
    phoneNumber: yup.string()
        .min(9, 'Phone number must contain 9 digits')
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required phone number'),
    email: yup.string()
        .email('Wrong email format')
        .required('Required email'),
    location: yup.string()
        .required('Required location'),
});

export const forgotScheme = yup.object({
    login: yup.string()
        .min(2, 'Login is too short')
        .max(20, 'Login is too long')
        .required('Required login'),
    password: yup.string()
        .min(8, 'Password must contain at least 8 characters')
        .required('Required password'),
    recoweryPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Required password'),
});