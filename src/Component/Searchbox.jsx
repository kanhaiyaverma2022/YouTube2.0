import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper ,IconButton} from '@mui/material'
import { Search,SearchIcon }  from '@mui/icons-material';

const Searchbox = () => {
  const [searchTerm,setSearchTerm] =useState('');
  const navigate=useNavigate();
  
  
  const handleSubmit=(e) =>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');

    }


  }

  return(
    <Paper
       component="form"
    onSubmit={handleSubmit}
    sx={{
      borderRadius:'15px',
      border: '1px solid #e3e3e3',
      p1:3,
      boxShadow:'none',
      mr: {sm:10 } ,
      
      
    }}>

      <input 
      className='search-bar'
      placeholder='  Search...' ///there is somethin wrong in code you have to review
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}/>

      
     <IconButton type='submit' sx={{
      pr:'8px' ,color:'red'
     }}>
      <Search/>
     </IconButton>
      


    </Paper>
  )
  }

export default Searchbox;
