'use client';
import { FC, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import SideMenu from "../SideMenu/SideMenu";

interface PropsTypes {
}

const Header: FC<PropsTypes> = ({ }) => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ top: 0, height: "70px" }} >
                <Toolbar sx={{ height: "70px" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setOpenMenu(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                        To Do List
                    </Typography>
                    <Button color="inherit">
                        Login
                        <LoginIcon sx={{ marginLeft: 0.5 }} />
                    </Button>
                </Toolbar>
            </AppBar>
            <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </Box>
    );
};

export default Header;