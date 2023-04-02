import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from '../translation/en/Translation.json';
import translationPl from '../translation/pl/Translation.json';

const resources = {
    en: {
        translation: translationEn
    },
    pl: {
        translation: translationPl
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;