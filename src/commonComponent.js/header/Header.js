import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import './HeaderStyle.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableTemporaryDrawer from '../drawer/Drawer'
import { IconButton } from "@material-ui/core";

export default function Header() {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }
    const onClose = () => {
        setOpenDrawer(false);
    }
    return (
        <div className='header-div'>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawer}>
                        <MenuIcon className="header-div__menu" />
                        </IconButton>
                    <h1 style={{"marginLeft":"15em"}}>Kartzone</h1>
                </Toolbar>
            </AppBar>
            {openDrawer ? <SwipeableTemporaryDrawer setOpen={openDrawer} onClose={onClose} /> : null}
        </div>
    );
}
