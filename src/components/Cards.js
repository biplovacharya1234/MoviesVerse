import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
function Cards() {
  const [data, setData] = useState([
    {
      name: "Avengers Endgame",
      year: "2018",
      rating: 5,
      img: "https://www.photomural.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4126_avengers_infinity_war_movie_poster_web.jpg"
    }
  ])

  return (
    <div className='flex flex-wrap justify-center p-3 bg-neutral-950'>
      {
        data.map((Cards) => (
          <div className='card font-medium p-2 hover:-translate-y-2 cursor-pointer mt-2 text-center bg-neutral-800'>
            <img src={Cards.img} alt="" className='h-72 w-45 m-auto mt-2' />
            <h1>{Cards.name}</h1>
            <Box>
              <Rating name="customized-10 read-only" defaultValue={5} max={10} readOnly sx={{fontSize:20}}/>
            </Box>
            <h1>{Cards.year}</h1>
          </div>
        )

        )
      }

    </div>

  )
}

export default Cards
