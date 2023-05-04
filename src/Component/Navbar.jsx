import React from 'react'  //write this code with just write a rafce
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import { Search } from '@mui/icons-material'
import Searchbox from './Searchbox'

const Navbar = () => (
  (
    <Stack direction="row" 
    alignItems="center"
     p={2} 
    sx={{position:'sticky' , 
    background:'#000', 
    top:'0',
    justifyContent:'space-between'}}>


      <Link to='/' style={{display:'flex' ,alignItems:'center'}}>
        <img src={logo} alt='logo' height={45}/>
      </Link>

        <Searchbox/>
    </Stack>
  )
)
  


export default Navbar
