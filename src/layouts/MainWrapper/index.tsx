import { Box } from "@mui/system"
import { Outlet } from "react-router-dom"
import Menu from "../Menu"
import './style.css'

const MainWrapper:React.FC = () => {
    return(
        <Box className='app__main-grid-container'>
            <Box className='Manu'>
                <Menu />
            </Box>
            
            <Box className='Main'>
                <Outlet />
            </Box>
        </Box>
    )
}

export default MainWrapper