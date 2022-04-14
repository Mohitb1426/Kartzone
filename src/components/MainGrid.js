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
                        <Grid className='mainGrid-view'>
                            <div className="product-mainDiv" >
                                <div className="product-hover">
                                    <Box className='box-image'
                                        component="img"
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
