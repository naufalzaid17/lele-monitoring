import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';

function EditAir() {
    const {id} = useParams();
    const [phAir, setPhAir] = useState('');
    const [kadarAir, setKadarAir] = useState('');
    const [warnaAir, setWarnaAir] = useState('');
 
    const getData = async() => {
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/air/view-air/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        setPhAir(data.air.ph_air)
        setKadarAir(data.air.kadar_air)
        setWarnaAir(data.air.warna_air)
    }

    const updateData = (e) => {
        e.preventDefault();
        
        let user = JSON.parse(localStorage.getItem('data'));
        axios.put('https://monitor-pakan-lele-production.up.railway.app/air/update-air/'+id, {
            ph_air: phAir,
            kadar_air: kadarAir,
            warna_air: warnaAir   
        },{
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => {
            console.log(res);
            if(res.status == 200){
                return Swal.fire({
                    heightAuto: false,
                    icon: "success",
                    title: "Berhasil",
                    text: "Air berhasil diupdate",
                    confirmButtonColor: "#8B5CF6",
                    confirmButtonText: "Ok",
                }).then((res) => {
                    if (res.isConfirmed) window.location.href = "/air/"+id;
                });
            }
        })
    }

    useEffect(() => {
        getData();
    },[]) 
  return (
    <div>
        <div className="fixed w-full">
            <Navbar title="Edit Air"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="h-screen">
                    <div className="flex h-full">
                        <div className="m-auto w-full px-6">
                            <div className="">
                                <form onSubmit={updateData} className='space-y-5'>
                                    <h1 className='text-xl text-center'> EDIT AIR </h1>
                                    <div>
                                        <label htmlFor="Phair" className="Phair"></label>
                                        <input required type="text" value={phAir} onChange={(e) => setPhAir(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Ph Air'/>
                                    </div>  

                                    <div>
                                        <label htmlFor="kadarAir" className="kadarAir"></label>
                                        <input required type="text" value={kadarAir} onChange={(e) => setKadarAir(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Kadar Air'/>
                                    </div>  

                                    <div>
                                        <label htmlFor="warnaAir" className="warnaAir"></label>
                                        <input required type="text" value={warnaAir} onChange={(e) => setWarnaAir(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Warna Air'/>
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

export default EditAir