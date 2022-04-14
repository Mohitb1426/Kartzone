import * as React from 'react';
import { styled } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Slider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { handleProduct } from '../../reduxToolkit/CreateSlice'
import './drawer.scss'

export default function SwipeableTemporaryDrawer(props) {
    const [value, setValue] = React.useState([0, 1000]);
    const [category, setCategory] = React.useState('');
    const dispatch = useDispatch();
    const loaderEnable = (Type) => {
        dispatch(handleProduct({ type: Type, price: value }))
        setCategory(Type);
    }
    const sliderChange = (event, newValue) => {
        setValue(newValue);
        dispatch(handleProduct({ type: category, price: newValue }))
    };
    const list = () => (
        <Box
        >
            <List>
                <ListItem  >
                    <ListItemText ><span className='filter-drawer'>Filters</span></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText className='filter-drawer-mobile-view' >Price</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText > <Box className='slider-box' >
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={sliderChange}
                            valueLabelDisplay="auto"
                            step={10}
                            min={10}
                            max={1000}
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
                    <ListItemText className='filter-drawer-mobile-view' onClick={() => loaderEnable('shoes')}>Shoes</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText className='filter-drawer-mobile-view' onClick={() => loaderEnable('bags')}>Bags</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText className='filter-drawer-mobile-view' onClick={() => loaderEnable('watches')}>Watches</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText className='filter-drawer-mobile-view' onClick={() => loaderEnable('scarfs')}>Scarf
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
    return (
        <div>
            <React.Fragment>
                {list()}
            </React.Fragment>
        </div>
    );
}
