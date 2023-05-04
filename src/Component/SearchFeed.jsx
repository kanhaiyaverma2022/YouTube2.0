
import { useState,useEffect } from 'react';
import {Box,Typography} from '@mui/material';
import {fetchFROMapi} from '../utils/fetchFROMapi';
import {Videos }from './';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {
  
    const [videos, setVideos]=useState([]);
    const {searchTerm}=useParams();



  useEffect(()=>{
    fetchFROMapi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))

  },[searchTerm]);

  return (
    <Box p={2} sx={{overflowY:'auto', height:'92vh' ,flex:2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
               Search Result for:
          
           
           
                <span   style={{color:'#F31503' ,marginLeft:'3px' }} >  
                {searchTerm}
                 </span>videos
      </Typography>
      
      <Videos  videos={videos}/>
      </Box>
    
  )
}

export default SearchFeed;

