import * as yup from 'yup';

export const loginScheme = yup.object({
    login: yup.string()
        .min(2, 'Login is too short')
        .max(50, 'Login is too long')
        .required('Required login'),
    password: yup.string()
        .min(8, 'Password must contain at least 8 characters')
        .required('Required password'),
  });