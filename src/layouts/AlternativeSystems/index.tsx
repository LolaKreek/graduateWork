import { ListItemButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './style.css';
import { useNavigate } from 'react-router-dom';

const AlternativeSystems = () => {
    const styleIcon = {
        "&.MuiSvgIcon-fontSizeMedium" : {
            minWidth: "40px",
            minHeight: "40px"
        },
    }

    const styleIconContainer = {
        "&:hover": {
            backgroundColor: 'rgba(140, 47, 131, 0.6)',
            borderRadius: '10px'
        },
        minWidth: '72px',
        borderRadius: '10px'
    }

    return (
        <div className='alternative-systems'>
            <ListItemButton sx={styleIconContainer} className='alternative-systems__item' component="a" target="_blank" href="https://accounts.google.com/v3/signin/identifier?dsh=S-1727105955%3A1680519164665353&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7TWogqM30iNnmxDweJYv28msVJWvMaidu-SwKgERUTYKiEM1zVtjTwCvYeVZNF9Y9cs2bQnGg&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                <GoogleIcon sx={styleIcon}/>
            </ListItemButton>

            <ListItemButton sx={styleIconContainer} className='alternative-systems__item' component="a"target="_blank" href="https://en-gb.facebook.com">
                <FacebookIcon sx={styleIcon}/>
            </ListItemButton>

            <ListItemButton sx={styleIconContainer} className='alternative-systems__item' component="a"target="_blank" href="https://twitter.com/i/flow/login">
                <TwitterIcon sx={styleIcon}/>
            </ListItemButton>
        </div>
    )
}

export default AlternativeSystems