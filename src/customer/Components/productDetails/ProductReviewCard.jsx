import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item sx={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56, height:56,bgcolor:"#9155fd"}}>P</Avatar>
            </Box>
        </Grid>
        <Grid item sx={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Pummy</p>
                    <p className='opacity-70'>Dec 18, 2023</p>
                </div>
            </div>
            <Rating value={4.5} name="half-rating" readOnly  precision={.5}/>
                <p>This is Average Shirt, Please don't purchase it.</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
