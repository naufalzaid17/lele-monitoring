import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';

function EditKolam() {
    const { id } = useParams();
    const [jumlahLele, setJumlahLele] = useState('');
    const [avgBerat, setAvgBerat] = useState('');
    const [luasKolam, setLuasKolam] = useState('');

    const getData = async() => {
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/kolam/view-kolam/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        setJumlahLele(data.kolam.jumlah_lele)
        setAvgBerat(data.kolam.berat_rata)
        setLuasKolam(data.kolam.luas_kolam)
    }

    const updateData = (e) => {
        e.preventDefault();
        
        let user = JSON.parse(localStorage.getItem('data'));
        axios.put('https://monitor-pakan-lele-production.up.railway.app/kolam/update-kolam/'+id, {
            jumlah_lele: jumlahLele,
            berat_rata: avgBerat,
            luas_kolam: luasKolam   
        },{
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => {
            console.log(res);
            if(res.status == 200){
                return Swal.fire({
                    heightAuto: false,
                    icon: "success",
                    title: "Berhasil",
                    text: "Kolam berhasil diupdate",
                    confirmButtonColor: "#8B5CF6",
                    confirmButtonText: "Ok",
                }).then((res) => {
                    if (res.isConfirmed) window.location.href = "/kolam/"+id;
                });
            }
        })
    }

    useEffect(() => {
        getData();
    }, [])
  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="Edit Kolam"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="h-screen">
                    <div className="flex h-full">
                        <div className="m-auto w-full px-6">
                            <div className="">
                                <form onSubmit={updateData} className='space-y-5'>
                                    <h1 className='text-xl text-center'> EDIT KOLAM </h1>
                                    <div>
                                        <label htmlFor="jumlahLele" className="jumlahLele"></label>
                                        <input required type="text" value={jumlahLele} onChange={(e) => setJumlahLele(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Jumlah Lele'/>
                                    </div>  

                                    <div>
                                        <label htmlFor="avgBerat" className="avgBerat"></label>
                                        <input required type="text" value={avgBerat} onChange={(e) => setAvgBerat(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Jumlah Berat rata-rata'/>
                                    </div>  

                                    <div>
                                        <label htmlFor="luasKolam" className="luasKolam"></label>
                                        <input required type="text" value={luasKolam} onChange={(e) => setLuasKolam(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Luas Kolam Lele'/>
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

export default EditKolam