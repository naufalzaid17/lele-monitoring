import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

function SetReminder() {

    const [timer, setTimer] = useState([]);

    const getData = async () => {
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/timer/view-timer', {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        setTimer(data.result);
    }
    useEffect(() => {
        getData();
    },[])
  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="Reminder"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50 min-h-screen">
                <div className=" py-16 px-5">
                    {
                        timer.map((a,index) => {
                            return  <div key={index} className='w-full border border-black py-2 px-5 mt-2 rounded hover:bg-violet-500 hover:text-white'>
                            <a href={"/reminder/"+a.timer_id} className='flex justify-between items-center'>
                                <div>
                                    <div className='flex space-x-2 items-center'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className='font-semibold text-lg'>
                                            {a.waktu}
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </div>
                        })
                    }
                  
                  
                </div>
            </div>
            
                <div id="footer" className='fixed w-full md:w-1/2 bg-white py-2 bottom-0'>
                    <div className="flex justify-center space-x-2">
                        <button className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-5 rounded font-bold hover:text-white'>Aktifkan</button>
                        <a href='/input_reminder' className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-5 rounded font-bold hover:text-white'>Tambah</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default SetReminder;