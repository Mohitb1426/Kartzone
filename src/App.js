import { Box } from '@material-ui/core';
import './App.css';
import Header from './commonComponent.js/header/Header';
import MainGrid from './components/MainGrid';
import SwipeableTemporaryDrawer from './commonComponent.js/drawer/Drawer';
import Footer from './commonComponent.js/footer/Footer';

function App() {
  return (
    <div className="App">
      <Box>
        <Header />
        <MainGrid />
        <SwipeableTemporaryDrawer />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
