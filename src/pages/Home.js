import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

function Menu() {

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('data'));
    if(data === null){
        window.location.href = "/"
    }
  }, []);

  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="Dashboard" />
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6  bg-slate-50">
                <div className="h-screen">
                    <div className="flex h-full">
                        <div className='m-auto w-full px-5'>
                            <div className='grid justify-items-center gap-4'>
                                <a href='/list-kolam' className="w-full text-2xl text-center border border-violet-500 text-violet-500 py-5 px-5 rounded font-bold hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white">Kolam</a>
                                <a href='/list-ikan' className="w-full text-2xl text-center border border-violet-500 text-violet-500 py-5 px-5 rounded font-bold hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white">Ikan</a>
                                <a href='/list-air' className="w-full text-2xl text-center border border-violet-500 text-violet-500 py-5 px-5 rounded font-bold hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white">Air</a>
                                <a href='/list-reminder' className="w-full text-2xl text-center border border-violet-500 text-violet-500 py-5 px-5 rounded font-bold hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white">Reminder</a>
                                {/* <a href='/list-reminder' className="px-3 py-6 bg-violet-500 rounded text-white font-bold">Reminder</a> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Menu