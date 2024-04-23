import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const SearchBar = () => {
  return (
    <div className="relative ">
      <InputBase
        placeholder="        Search..."
        className=" w-[20rem] h-8  top-[-6px]  mr-24 text-sm rounded-lg bg-gray-100 "
        startAdornment={
          <SearchIcon className="absolute top-[-3px]  w-6 h-5 m-2  text-gray-800WW" />
        }
      />
    </div>
  );
};

export const SearchBar2=()=>{
  return(
    <div className="relative">
    <InputBase
      placeholder="Start a post, try writing with AI "
      className="search-input  font-sans  bg-gray-200   w-[20rem] lg:w-[28rem] 
      h-12 text-base text-black  rounded-3xl pl-6  "
      />
  </div>
  )
}

export default SearchBar;
