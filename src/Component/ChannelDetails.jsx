import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import{Videos , ChannelCard} from './'
import { fetchFROMapi } from '../utils/fetchFROMapi';

const ChannelDetails = () => {
  

  
    const [channelDetail, setChannelDetail]=useState(null)
    const [videos,setVideos]=useState([])

    const {id} =useParams();
    // console.log(channelDetail ,Videos)


    useEffect(()=>{
      fetchFROMapi(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelDetail(data?.items[0]));

      fetchFROMapi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=> setVideos(data?.items));
    
    },[id])


    

   return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background:"url(https://img.freepik.com/free-photo/silver-christmas-deco-baubles-black_1220-3076.jpg?w=1380&t=st=1681024471~exp=1681025071~hmac=695ee2b805839393b857e522ebe27b9db49568a37b1cc54690e60154f7d21ca8) " ,
        zIndex:10,
        
      height:'300px',
    backgroundSize:'cover'}}
        
        /> 
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>


      </Box>
         <Box display={'flex'} p='2'>
            <Box  sx={{mr:{sm:"100px"}}}/>
               <Videos videos={videos}/>
            </Box>
      </Box>
    
  )
  }

export default ChannelDetails
