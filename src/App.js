
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Axios from 'axios';
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch]=useState('')
  const [images, setImages]=useState([])
  const [searchValue, setSearchValue]=useState('')

  const baseURL='https://api.unsplash.com';
  const APP_ID="DWO59rnjMed1_fO1xWAiHTvAdtAAjrZ0gby9h6KHrFo"

  const url=`${baseURL}/search/photos?page=1&query=${search}&client_id=${APP_ID}`;

  const fetchData= async ()=>{
    const response= await Axios.get(url)
    console.log(response.data.results)
    setSearchValue(search)
    setImages(response.data.results)
    setSearch(" ")
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    fetchData()
    
  }
  const onKeyDown=(e)=>{
    if(e.key==='Enter'){
      fetchData()
    }
  }
  const onClick=()=>{
         fetchData()
         
    }
  
  const onChange=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <>
      <Header onSubmit={onSubmit} onChange={onChange} onClick={onClick} onKeyDown={onKeyDown} />
      <Gallery images={images} searchValue={searchValue} />
      <Footer />
    </>
  );
}

export default App;
