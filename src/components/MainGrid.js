import { Box, Grid } from '@material-ui/core'
import React from 'react';
import { useSelector } from 'react-redux';
import './mainGrid.scss'

export default function MainGrid() {
    const allProducts = useSelector((state) => state && state.Change.value.finalProduct);
    return (
        <div >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
                {allProducts.length < 1 ? <div>Please Change Price Range</div> : allProducts.map((product, index) => {
                    return (
                        <Grid item xs={3} md={3}>
                            <div className="product-mainDiv" >
                                <div className="product-hover">
                                    <Box
                                        component="img"
                                        sx={{
                                            boxShadow: 1,
                                            width: '10rem',
                                            height: '12rem',
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
                                        <p className="bold">{product.name}</p>
                                        <p>{product.description}</p>
                                        <div className='product-price'>
                                            <p className="bold"><span>₹</span>{product.price}</p>
                                            <p className="product-pra" ><span>₹</span>{product.discountedPrice}</p></div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}
