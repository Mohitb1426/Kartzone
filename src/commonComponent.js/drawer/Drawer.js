import * as React from 'react';
import { CircularProgress, IconButton, styled } from '@material-ui/core';
import { SwipeableDrawer } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Slider } from '@material-ui/core';
import Products from '../../Products.json'
import { useDispatch, useSelector } from 'react-redux';
import { handleProduct, handleSlider } from '../../reduxToolkit/CreateSlice'
import './drawer.scss'

export default function SwipeableTemporaryDrawer(props) {
    const [state, setState] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] = React.useState(true);
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.Change.value.finalProduct);

    const loaderEnable = (Type) => {
        // setState(false);
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
        dispatch(handleProduct({ type: Type }))
    }
    function valuetext(value: number) {
        return `${value}°C`;
    }
    const sliderChange = (event, newValue) => {
        setValue(newValue);
        dispatch(handleSlider({ filterProduct: allProducts, price: newValue }))
    };
    const list = () => (
        <Box
            sx={{
                boxShadow: 3,
                width: '20rem',
                height: '8rem',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                p: 1,
                m: 1,
                borderRadius: 2,
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
            }}
        >
            <List>
                <ListItem button >
                    <ListItemText ><span className='filter-drawer'>Filters</span></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText >Price</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText > <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={10}
                            getAriaValueText={valuetext}
                            step={10}
                            onChange={sliderChange}
                            marks
                            min={10}
                            max={1000}
                            valueLabelDisplay="auto"
                            value={value}
                        />
                    </Box></ListItemText>
                </ListItem>
                <ListItem >
                    <ListItemText ><span className='filter-drawer'>Category</span></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText
                        onClick={() => loaderEnable('shirts')}
                    >Shirts</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText onClick={() => loaderEnable('shoes')}>Shoes</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText onClick={() => loaderEnable('bags')}>Bags</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText onClick={() => loaderEnable('watches')}>Watches</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText onClick={() => loaderEnable('scarfs')}>Scarf
                    </ListItemText>
                </ListItem>
            </List>
        </Box >
    );
    const DisabledBackground = styled(Box)({
        width: "100%",
        height: "100%",
        position: "fixed",
        background: "#ccc",
        opacity: 0.5,
        zIndex: 1
    });
    const CircularLoading = () => (
        <>
            <CircularProgress
                size={70}
                sx={{
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    textAlign: "center",
                }}
            />
            <DisabledBackground />
        </>
    );
    return (
        <div>
            <React.Fragment>
                <SwipeableDrawer
                    open={state ? props.setOpen : state}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={props.onClose}
                    ><ChevronLeftIcon /></IconButton>

                    {list()}
                </SwipeableDrawer>
                {loading ? <CircularLoading /> : null}
            </React.Fragment>
        </div>
    );
}
