import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

type GradientButtonProps = {
    option: 'submit',
    buttonName: string,
    className?: string
}

const GradientButton = ({option, className, buttonName}:GradientButtonProps) => {
    const {t} = useTranslation();
    const styleButton = {
        "&.MuiButton-root" : {
            maxWidth: "250px",
            margin: "10px auto",
            padding: "5px 25px",
            background: "linear-gradient(to right, rgb(199,62,140), #000000)!important",
            color: "white",
            fontFamily: "Quicksand",
            fontSize: "17px",
            borderRadius: '10px'
        },
        "&.register__button" : {
            margin: "40px auto 0 auto"
        },
        "&.forgot__password" : {
            margin: "40px auto"
        }
    }

    return(
        <>
            <Button sx={styleButton} className={className ? className : ''} type={option}>{t(buttonName)}</Button>
        </>
    )
}

export default GradientButton