import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import './style.css';

const NotFound = () => {
    const navigate = useNavigate();

    return(
        <Box
            className="not-found__massage"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="90vh">
            <div>
                <h1>Page not found</h1>
                <Button onClick={()=>{navigate('/')}}>Back to main page</Button>
            </div>
        </Box>
    )
}

export default NotFound;