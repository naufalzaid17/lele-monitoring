

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar'

function ListIkan() {
    const [ikan, setIkan] = useState([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    console.log(searchParams.get("id"));

    const getData = async() => {
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/ikan/view-ikan', {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        setIkan(data.result);
    }

    useEffect(() => {
        getData();
    },[])

    
  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="List Ikan"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50 min-h-screen">
                <div className=" py-16 px-5">
                    {
                        ikan.map((a, index) => {
                            return <div key={index} className='hover:cursor-pointer w-full border border-black py-2 px-5 mt-2 rounded hover:bg-violet-500 hover:text-white'>
                            <div onClick={() => {navigate({pathname :`/ikan/${a.ikan_id}`,
                                                        search: createSearchParams({
                                                          id: searchParams.get("id")
                                                        }).toString()
                                                      })}} className='flex justify-between items-center'>
                                <div>
                                    <div className='flex space-x-2 items-center'>
                                        <div>
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M21 11c0-.552-.448-1-1-1s-1 .448-1 1c0 .551.448 1 1 1s1-.449 1-1m3 .486c-1.184 2.03-3.29 4.081-5.66 5.323-1.336-1.272-2.096-2.957-2.103-4.777-.008-1.92.822-3.704 2.297-5.024 2.262.986 4.258 2.606 5.466 4.478m-6.63 5.774c-.613.255-1.236.447-1.861.573-1.121 1.348-2.796 2.167-5.287 2.167-.387 0-.794-.02-1.222-.061.647-.882.939-1.775 1.02-2.653-2.717-1.004-4.676-2.874-6.02-4.287-1.038 1.175-2.432 2-4 2 1.07-1.891 1.111-4.711 0-6.998 1.353.021 3.001.89 4 1.999 1.381-1.2 3.282-2.661 6.008-3.441-.1-.828-.399-1.668-1.008-2.499.429-.04.837-.06 1.225-.06 2.467 0 4.135.801 5.256 2.128.68.107 1.357.272 2.019.495-1.453 1.469-2.271 3.37-2.263 5.413.008 1.969.773 3.799 2.133 5.224"/>
                                            </svg>
                                        </div>
                                        <div className='font-semibold text-lg'>
                                            Ikan {a.ikan_id}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        })
                    }





                </div>
            </div>
                <div id="footer" className='fixed w-full md:w-1/2 bg-white py-2 bottom-0'>
                    <div className="flex justify-center space-x-2">
                        {/* <button className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-5 rounded font-bold hover:text-white'>Hitung</button> */}
                        <a href='/input-ikan' className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white'>Tambah</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ListIkan