import MainGrid from './components/MainGrid';
import SwipeableTemporaryDrawer from './commonComponent.js/drawer/Drawer';
import Footer from './commonComponent.js/footer/Footer';
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import './components/mainGrid.scss'

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar className='appBar-main'
            //  sx={{ width: `calc(90% - ${drawerWidth}px)`}}
        >
          <Toolbar>
            <Typography variant="h6">
              Kartzone
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer className='drawer-class'
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <SwipeableTemporaryDrawer />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <MainGrid />
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

