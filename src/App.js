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


const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` ,color:'rgb(249, 251, 253)'}}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Kartzone
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            color: "#rgb(249, 251, 253)",
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box"
            }
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
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

//     </div >
//   );
// }

