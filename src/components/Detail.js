import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material'
import { TextareaAutosize } from '@mui/material';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { moviesRef, db } from '../firebase/Firebase';
import { reviewsRef } from '../firebase/Firebase';
import { getDoc, doc, updateDoc,query,where } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert';

function Detail(prevRating,prevNumberofrating,rating,numberofrating) {

    const [rate, setRate] = useState(0);

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState("")

    const sendReview = async () => {
        if (rate===0) {
            swal({
                title: "Invalid Rating !! Enter rating between 1 to 10",
                icon: "error",
                buttons: false,
                timer: 3000
            })
        }
        else {
            setLoading(true);
            try {
                await addDoc(reviewsRef, {
                    movieid: id,
                    name: "Biplov",
                    rating: rate,
                    thought: form,
                    timestamp: new Date().getTime()
                })
                
                const docref = doc(db,"Movies", id);
                await updateDoc(docref,{
                    rating:prevRating+rating,
                    numberofrating:prevNumberofrating+1

                })

                setRate(0);
                setForm("");

                swal({
                    title: "Review Sent",
                    icon: "success",
                    buttons: false,
                    timer: 3000
                })
            }
            catch (error) {
                swal({
                    title: error.message,
                    icon: "error",
                    buttons: false,
                    timer: 3000
                })
            }
            setLoading(false);
        }


    }

    const { id } = useParams();
    const [data, setData] = useState({
        name: "",
        year: "",
        image: "",
        description: "",
        rating:0,
        numberofrating:0,
    });

    useEffect(() => {
        async function getData() {
            const _doc = doc(db, "Movies", id)
            const _data = await getDoc(_doc);
            setData(_data.data())
        }
        getData();
    }, [])


    return (
        <div className='w-4/5 m-auto'>
            <Grid container className='p-4 flex' sx={{ border: '2px  solid white' }}>
                <Grid item md={6} xs={12} sx={{ border: '2px  solid red' }} >
                    <h1>{data && data.name}</h1>
                    <h1>{data && data.year}</h1>
                    <img className='h-72 m-auto' src={data && data.image} alt='' />
                    <Rating className="customized-10" defaultValue={0} max={10} readOnly sx={{ fontSize: 20, margin: '16px' }} prevRating={data.rating} id={id} prevNumberofrating={data.numberofrating} value={data.rating/data.numberofrating}/>

                    <p className='text-left m-4'>{data && data.description}</p>
                </Grid>
                <Grid item md={6} xs={12} sx={{ border: '2px  solid green' }}>
                    <p>Give your Rating</p>
                    <Rating value={rate} className="customized-10" defaultValue={0} max={10} onChange={(event, newValue) => setRate(newValue)} />
                    <p className='m-3'>Give your Review</p>
                    <TextareaAutosize value={form} onChange={(e) => setForm(e.target.value)} className=' bg-neutral-700 w-4/5 mt-4 mb-4 block m-auto'></TextareaAutosize>
                    <Button onClick={sendReview} variant="contained">{loading ? <TailSpin height={25} color="white" /> : "Post"}</Button>
                    <h1 className='m-3'>Others Review</h1>
                </Grid>
            </Grid>
        </div>

    )
}
export default Detail