import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';

function DetailAir() {

    const {id} = useParams([]);
    const [air, setAir] = useState([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()


    const getData = async() => {
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/air/view-air/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        const {air} = data
        console.log(air)
        setAir([air]);
    }


    const deleteAir = () => {
        let user = JSON.parse(localStorage.getItem('data'));
        axios.delete('https://monitor-pakan-lele-production.up.railway.app/air/delete-air/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => {
            console.log(res);
            if(res.status == 200){
                return Swal.fire({
                    heightAuto: false,
                    icon: "success",
                    title: "Berhasil",
                    text: "Air berhasil dihapus",
                    confirmButtonColor: "#8B5CF6",
                    confirmButtonText: "Ok",
                }).then((res) => {
                    if (res.isConfirmed) window.location.href = "/list-air";
                });
            }
        })
    }

    const PilihAir = () => {
        let user = JSON.parse(localStorage.getItem('data'));
        axios.put('https://monitor-pakan-lele-production.up.railway.app/kolam/update-kolam/'+ searchParams.get("id"), {air_id:id}, {
            headers: { Authorization: `Bearer ${user.token}` },
        }).then(res => {
            if(res.status == 200){
                window.location.href = "/kolam/"+searchParams.get("id")
            }
        })
    }

    const checkKondisiAir = () => {
        let user = JSON.parse(localStorage.getItem('data'));
        axios.post('https://monitor-pakan-lele-production.up.railway.app/air/hitung-air/'+id, {}, {
            headers: { Authorization: `Bearer ${user.token}` },
        }).then(res => {
            if(res.status == 200){
                return Swal.fire(`${res?.data?.message}`)
            }
        })
    }
    useEffect(() => {
        getData();
    },[])
  return (
    <div>
        <div className="fixed w-full">
            <Navbar title="Detail Air"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="h-screen">
                    <div className="flex h-full">
                        <div className="m-auto w-full px-6">
                            <div>
                                <h1 className='text-center text-2xl mb-5 text-bold'>DETAIL AIR</h1>
                                <form className='space-y-5'>
                                    <div className="flex justify-center space-x-3">
                                        {
                                            air && air.map((data, index) => {
                                                return (
                                                <div key={index} className="grid grid-cols-7 border bg-gray-100 rounded flex items-center">
                                                    <div className="text-left col-span-2">Kadar Air</div>
                                                    <div className="text-center ">:</div>
                                                    <div className="text-center col-span-4">
                                                        {data.kadar_air}
                                                    </div>
                                                    
                                                    <div className="text-left col-span-2">PH Air</div>
                                                    <div className="text-center ">:</div>
                                                    <div className="text-center col-span-4">
                                                        {data.ph_air}
                                                    </div>
                                                    
                                                    <div className="text-left col-span-2">Warna Air</div>
                                                    <div className="text-center ">:</div>
                                                    <div className="text-center col-span-4">
                                                        {data.warna_air}
                                                    </div>

                                                    <div className="text-left col-span-2"> Kondisi Air</div>
                                                    <div className="text-center ">:</div>
                                                    <div className="text-center col-span-4">
                                                        <div className='hover:cursor-pointer border border-violet-500 text-violet-500  hover:bg-violet-500 rounded font-bold hover:text-white' onClick={() => checkKondisiAir()}>check</div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="grid justify-items-center gap-4 text-center">
                                           <div onClick={() => PilihAir()}  className="hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Pilih</div>
                                           <div onClick={(e) => {navigate({pathname: "/air/edit/"+id})}} className="hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold" >Edit</div>
                                           <div onClick={() => deleteAir()} className="hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Delete</div>
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

export default DetailAir