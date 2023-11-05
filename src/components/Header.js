import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Buttons from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
 
  return (
    <>
      <div className=" header sticky z-10 top-0 bg-neutral-700 p-2 flex justify-between">
        <Link to={'/'}><h1 className="text-5xl cursor-pointer"><span className="text-blue-500">Movies</span>Verse</h1></Link>
        
        <div className='gap-2 flex buttons'>
        <Button variant="contained">Log In</Button>
        <Link to={'/addmovie'}><Button variant="contained">Add Movie</Button></Link>
        </div>
        
        

      </div>

    </>
  )
}

export default Header