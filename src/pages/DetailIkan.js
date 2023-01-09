import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';

function DetailIkan() {
    const {id} = useParams([]);
    const [ikan, setIkan] = useState([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()

    const getDataIkan = async() => {
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/ikan/view-ikan/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        const {ikan} = data
        console.log(ikan)
        setIkan([ikan]);
    }

    const deleteIkan = () => {
        let user = JSON.parse(localStorage.getItem('data'));
        axios.delete('https://monitor-pakan-lele-production.up.railway.app/ikan/delete-ikan/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => {
            console.log(res);
            if(res.status == 200){
                return Swal.fire({
                    heightAuto: false,
                    icon: "success",
                    title: "Berhasil",
                    text: "Ikan berhasil dihapus",
                    confirmButtonColor: "#8B5CF6",
                    confirmButtonText: "Ok",
                }).then((res) => {
                    if (res.isConfirmed) window.location.href = "/list-ikan";
                });
            }
        })
    }

    const pilihIkan = () => {
        let user = JSON.parse(localStorage.getItem('data'));
        axios.put('https://monitor-pakan-lele-production.up.railway.app/kolam/update-kolam/'+ searchParams.get("id"), {ikan_id:id}, {
            headers: { Authorization: `Bearer ${user.token}` },
        }).then(res => {
            if(res.status == 200){
                window.location.href = "/kolam/"+searchParams.get("id")
            }
        })
    }

    const checkKesehatanIkan = () => {
        
        let user = JSON.parse(localStorage.getItem('data'));
        axios.post('https://monitor-pakan-lele-production.up.railway.app/ikan/hitung-ikan/'+id,{},{
            headers: { Authorization: `Bearer ${user.token}` },
        }).then(res => {
            if(res.status == 200){
                return Swal.fire(`${res.data?.message}`)
            }
        })
    }

    useEffect(() => {
        getDataIkan();
    }, [])
  return (
    <div>
        <div className="fixed w-full">
            <Navbar title="Detail Ikan"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="h-screen">
                    <div className="flex h-full">
                        <div className="m-auto w-full px-6">
                            <div>
                                <h1 className='text-center text-2xl mb-5 text-bold'>DETAIL IKAN</h1>
                                <div className='space-y-5'>
                                    <div className="flex justify-center space-x-3">
                                        {
                                            ikan && ikan.map((data, index) => {
                                                return (
                                                <div key={index} className="grid grid-cols-7 border bg-gray-100 rounded flex items-center">
                                                    <div className="text-center col-span-2">Umur Ikan</div>
                                                    <div className="text-center ">:</div>
                                                    <div className="text-center col-span-4">
                                                        {data.umur} bulan
                                                    </div>
                                                    
                                                    <div className="text-center col-span-2">Berat Ikan</div>
                                                    <div className="text-center ">:</div>
                                                    <div className="text-center col-span-4">
                                                        {data.berat} kg
                                                    </div>
                                                    
                                                    <div className="text-center col-span-2">Ukuran Ikan</div>
                                                    <div className="text-center ">:</div>
                                                    <div className="text-center col-span-4">
                                                        {data.ukuran} cm
                                                    </div>


                                                    <div className="text-center col-span-2">Kesehatan Ikan</div>
                                                    <div className="text-center ">:</div>
                                                    <div className="text-center col-span-4">
                                                        {
                                                            <button className='border border-violet-500 text-violet-500  hover:bg-violet-500 rounded font-bold hover:text-white' onClick={() => checkKesehatanIkan()}>check</button>
                                                        }
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="grid justify-items-center gap-4 text-center">
                                        <div onClick={() => pilihIkan()} className="hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Pilih Ikan</div>
                                        <div onClick={(e) => {navigate({pathname: "/ikan/edit/"+id})}} className="hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold" >Edit</div>
                                        <div onClick={() => deleteIkan()} className="hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailIkan