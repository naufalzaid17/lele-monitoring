import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, createSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar'

function DetailKolam() {

    const { id} = useParams();
    const [kolam, setKolam] = useState([]);
    const [pakan, setPakan] = useState([]);
    const navigate = useNavigate();

    const getDataKolam = async() =>{
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/kolam/view-kolam/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        const {kolam} = data
        setKolam([kolam]);
    }
    
    useEffect(() => {
        getDataKolam();
    },[])
    
    const deleteKolam = () => {
        let user = JSON.parse(localStorage.getItem('data'));
        axios.delete('https://monitor-pakan-lele-production.up.railway.app/kolam/delete-kolam/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => {
            console.log(res);
            if(res.status == 200){
                window.location.href = "/list-kolam"
            }
        })
    }

    const hitungPakan = (e) => {
        let users = JSON.parse(localStorage.getItem('data'));
        console.log(users);
        axios.put('https://monitor-pakan-lele-production.up.railway.app/kolam/hitung-pakan/'+id, {
            headers: { Authorization: `Bearer ${users.token}` }
        }).then(res => {
            console.log(res);
        })
    }


    
    
  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="Detail Kolam"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="h-screen">
                    <div className="flex h-full">
                        <div className="m-auto w-full px-6">
                            <div>
                                <h1 className='text-center text-2xl mb-5 text-bold'>DETAIL KOLAM</h1>
                                <div className='space-y-5'>
                                    <div className="flex justify-center space-y-5">
                                        {
                                            kolam && kolam.map((data, index) => {
                                                return (
                                                    <div key={index} className="grid grid-cols-10 gap-4 border bg-gray-100 rounded flex items-center">
                                            
                                                        <div className="text-center col-span-5">Air</div>
                                                        <div className="text-center col-span-1">:</div>
                                                        <div className="text-center col-span-3 ">
                                                            {data.air_id ? data.air_id : 
                                                                <button className='border border-violet-500 text-violet-500  hover:bg-violet-500 rounded font-bold hover:text-white'  
                                                                    onClick={(e) => {
                                                                    e.preventDefault()
                                                                    navigate({pathname: '/list-air',
                                                                        search: createSearchParams({
                                                                        id:id
                                                                        }).toString()
                                                                    })
                                                                }}>
                                                                    pilih air
                                                                </button>
                                                            }
                                                        </div>


                                                        <div className="text-center col-span-5">berat rata-rata</div>
                                                        <div className="text-center col-span-1">:</div> 
                                                        <div className="text-center col-span-3">
                                                            {data.berat_rata} kg
                                                        </div>           
            
                                                        <div className="text-center col-span-5">jumlah Ikan</div>
                                                        <div className="text-center col-span-1">:</div>            
                                                        <div className="text-center col-span-3">
                                                            {data.jumlah_lele} lele
                                                        </div>           

                                                        <div className="text-center col-span-5">jumlah pangan</div>
                                                        <div className="text-center col-span-1">:</div>            
                                                        <div className="text-center col-span-3">
                                                        {data.jumlah_pangan ? data.jumlah_pangan : 
                                                            <button className='text-sm text-center border border-violet-500 text-violet-500  hover:bg-violet-500 rounded font-bold hover:text-white'
                                                                onClick={() => hitungPakan()}> 
                                                                hitung pangan
                                                            </button>  
                                                        }
                                                        </div>           

                                                        <div className="text-center col-span-5">luas kolam</div>
                                                        <div className="text-center col-span-1">:</div>            
                                                        <div className="text-center col-span-3">
                                                            {data.luas_kolam} m<sup>2</sup>
                                                        </div>           

                                                        <div className="text-center col-span-5">timer</div>
                                                        <div className="text-center col-span-1">:</div>            
                                                        <div className="text-center col-span-3">
                                                            {data.timer_id ? data.timer_id : <button className='border border-violet-500 text-violet-500  hover:bg-violet-500 rounded font-bold hover:text-white'  
                                                                    onClick={(e) => {
                                                                    e.preventDefault()
                                                                    navigate({pathname: '/list-reminder',
                                                                        search: createSearchParams({
                                                                        id:id
                                                                        }).toString()
                                                                    })
                                                                }}>
                                                                    pilih timer
                                                                </button>
                                                            }
                                                        </div>           

                                                        <div className="text-center col-span-5">ikan</div>
                                                        <div className="text-center col-span-1">:</div>            
                                                        <div className="text-center col-span-3">
                                                            {data.ikan_id ? data.ikan_id : <button className='border border-violet-500 text-violet-500  hover:bg-violet-500 rounded font-bold hover:text-white'  
                                                                    onClick={(e) => {
                                                                    e.preventDefault()
                                                                    navigate({pathname: '/list-ikan',
                                                                        search: createSearchParams({
                                                                        id:id
                                                                        }).toString()
                                                                    })
                                                                }}>
                                                                    pilih ikan
                                                                </button>
                                                            }
                                                            
                                                        </div>           
        
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                    <div className="grid justify-items-center gap-4 text-center">
                                        <div onClick={(e) => {navigate({pathname: "/kolam/edit/"+id})}} className="hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold" >Edit</div>
                                        <div className="hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold" onClick={() => deleteKolam()}>Delete</div>
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

export default DetailKolam