import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Header() {
  return (
    <>
    <div className="bg-neutral-950 p-2 flex justify-between">
    <h1 className="text-5xl"><span className="text-blue-500">Movies</span>Verse</h1>
    <Button variant="contained">Log In</Button>
    </div>
    
    </>
  )
}

export default Header