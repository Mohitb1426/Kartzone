import { Avatar, Box, Grid } from '@material-ui/core'
import React from 'react';
import { useSelector } from 'react-redux';
import './mainGrid.scss'

export default function MainGrid() {
    const allProducts = useSelector((state) =>state && state.Change.value.filterProduct.length > 1 ? state.Change.value.filterProduct : state.Change.value.finalProduct);
    return (
        <div>
            <Grid container columns={20}>
                {allProducts.map((product, index) => {
                    return (
                        <Grid className="product-mainDiv" item xs={3}>
                            <div className='product-inside-div'>
                                <Box
                                    component="img"
                                    sx={{
                                        boxShadow: 1,
                                        width: '10rem',
                                        height: '16rem',
                                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                        borderRadius: 5,
                                        textAlign: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                    alt="The house from the offer."
                                    src={product.imgUrl}
                                />
                                <div className='product-details'>
                                    <p>{product.name}</p>
                                    <p>{product.description}</p>
                                    <div className='product-price'>
                                        <p><span>₹</span>{product.price}</p>
                                        <p style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', "marginLeft": "15px" }}><span>₹</span>{product.discountedPrice}</p></div>

                                </div>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}
