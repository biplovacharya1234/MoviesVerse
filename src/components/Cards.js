import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { TailSpin } from 'react-loader-spinner';
import { getDocs } from 'firebase/firestore';
import { moviesRef } from '../firebase/Firebase';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef)
      _data.forEach((doc) => {
        setData((prv) => [...prv, { ...(doc.data()), id: doc.id }])
      })
      setLoading(false);
    }
    getData();
  }, [])

  return (
    <div className='flex flex-wrap justify-center gap-4 p-3 bg-neutral-950'>
      {loading ? <div className='w-full flex justify-center items-center h-96' ><TailSpin /></div> :
        data.map((e,i) => (
          <Link to={`/detail/${e.id}`}>
      <div key={i} className='card font-medium p-2 hover:-translate-y-2 cursor-pointer mt-2 text-center bg-neutral-800'>
        <img src={e.image} alt="" className='h-72 w-45 m-auto mt-2' />
        <h1>{e.name}</h1>
        <Box>
          <Rating name="customized-10 read-only" defaultValue={e.rating/e.numberofrating} max={10} readOnly sx={{ fontSize: 20 }} />
        </Box>
        <h1>{e.year}</h1>
      </div>
    </Link>
  )
        )
}
    </div >

  )
}

export default Cards
