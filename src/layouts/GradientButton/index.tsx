import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

type GradientButtonProps = {
    option: 'submit'
}

const GradientButton = ({option}:GradientButtonProps) => {
    const {t} = useTranslation();
    const styleButton = {
        "&.MuiButton-root" : {
            maxWidth: "150px",
            margin: "10px auto",
            padding: "5px 25px",
            background: "linear-gradient(to right, rgb(199,62,140), #000000)!important",
            color: "white",
            fontFamily: "Quicksand",
            fontSize: "17px",
            borderRadius: '10px'
        }
    }

    return(
        <>
            <Button sx={styleButton} type={option}>{t('login')}</Button>
        </>
    )
}

export default GradientButton