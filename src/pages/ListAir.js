import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar'

function ListAir() {
    const [air, setAir] = useState([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const getData = async () => {
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/air/view-air', {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        setAir(data.result);
    }

    useEffect(() => {
        getData();
    })
  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="List Air"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50 min-h-screen">
                <div className=" py-16 px-5">
                    {
                    air.map((a, index) => {
                        return (
                        <div key={index} className='hover:cursor-pointer w-full border border-black py-2 px-5 mt-2 rounded hover:bg-violet-500 hover:text-white'>
                            <div onClick={() => {navigate({pathname :`/air/${a.air_id}`,
                                                        search: createSearchParams({
                                                        id: searchParams.get("id")
                                                        }).toString()
                                                    })}} className='flex justify-between items-center'>
                                <div>
                                    <div className='flex space-x-2 items-center'>
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M12 3.571c3.658 5.437 6 9.223 6 12.503 0 3.268-2.691 5.926-6 5.926s-6-2.658-6-5.925c0-3.281 2.341-7.067 6-12.504zm0-3.571c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075z"/>
                                            </svg>
                                        </div>
                                        <div className='font-semibold text-lg'>
                                            Air {a.air_id}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        )
                    })

                    
                    }
                    
                    
                </div>
            </div>
                <div id="footer" className='fixed w-full md:w-1/2 bg-white py-2 bottom-0'>
                    <div className="flex justify-center space-x-2">
                        {/* <button className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-5 rounded font-bold hover:text-white'>Hitung</button> */}
                        <a href='/input-air' className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white'>Tambah</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ListAir