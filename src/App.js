
import react from 'react'; 

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material';


// import  Navbar  from "./Component/Navbar.jsx"
// import {Feed } from "@mui/icons-material"
// import  SearchFeed from "./Component/SearchFeed"
// import  ChannelDetails from "./Component/ChannelDetails"
// import  VideoDetails from "./Component/VideoDetails"





import {Feed,ChannelDetails,Navbar,SearchFeed,VideoDetails,Searchbox} from './Component'


const App = () => (

  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar/>


      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id"  element={<VideoDetails/>}/>
        <Route path="/channel/:id"  element={<ChannelDetails/>}/>
        <Route path="/search/:searchTerm"  element={<SearchFeed/>}/>
      </Routes>
      

    </Box>
  </BrowserRouter>
);

export default App

