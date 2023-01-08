import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';

function EditIkan() {
    const {id} = useParams();
    const [umurIkan, setUmurIkan] = useState('');
    const [beratIkan, setBeratIkan] = useState('');
    const [sizeIkan, setSizeIkan] = useState('');
 
    const getData = async() => {
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/ikan/view-ikan/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        setUmurIkan(data.ikan.umur)
        setBeratIkan(data.ikan.berat)
        setSizeIkan(data.ikan.ukuran)
    }

    const updateData = (e) => {
        e.preventDefault();
        
        let user = JSON.parse(localStorage.getItem('data'));
        axios.put('https://monitor-pakan-lele-production.up.railway.app/ikan/update-ikan/'+id, {
            umur: umurIkan,
            berat: beratIkan,
            ukuran: sizeIkan   
        },{
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => {
            console.log(res);
            if(res.status == 200){
                window.location.href = "/ikan/"+id
            }
        })
    }

    useEffect(() => {
        getData();
    },[]) 
  return (
    <div>
        <div className="fixed w-full">
            <Navbar title="Edit Ikan"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="h-screen">
                    <div className="flex h-full">
                        <div className="m-auto w-full px-6">
                            <div className="">
                                <form onSubmit={updateData} className='space-y-5'>
                                    <h1 className='text-xl text-center'> EDIT Ikan </h1>
                                    <div>
                                        <label htmlFor="umurIkan" className="umurIkan"></label>
                                        <input type="text" value={umurIkan} onChange={(e) => setUmurIkan(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Umur Ikan'/>
                                    </div>  

                                    <div>
                                        <label htmlFor="beratIkan" className="beratIkan"></label>
                                        <input type="text" value={beratIkan} onChange={(e) => setBeratIkan(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Berat Ikan'/>
                                    </div>  

                                    <div>
                                        <label htmlFor="sizeIkan" className="sizeIkan"></label>
                                        <input type="text" value={sizeIkan} onChange={(e) => setSizeIkan(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Ukuran Ikan'/>
                                    </div>

                                    <div>
                                        <button type="submit" className="py-3 px-6 bg-violet-500 w-full text-white rounded text-lg text-bold">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditIkan