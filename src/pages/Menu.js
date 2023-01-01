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
                        <div className='m-auto w-1/2'>
                            <div className='space-x-10 flex justify-center text-center'>
                                <a href='/list_kolam' className="w-full text-center border border-violet-500 text-violet-500 py-5 px-5 rounded font-bold">Kolam</a>
                                <a href='/set_reminder' className="px-3 py-6 bg-violet-500 rounded text-white font-bold">Reminder</a>
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