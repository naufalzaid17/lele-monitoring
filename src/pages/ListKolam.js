import React from 'react'
import Navbar from '../components/Navbar'

function ListKolam() {
  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="List Kolam"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="py-16 px-5">
                    <div className="h-screen">
                        
                        <div className='w-full border border-black py-2 px-5 mt-2 rounded'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <div className='flex space-x-2 items-center'>
                                            <div className='font-semibold text-lg'>
                                                Kolam 1
                                            </div>
                                        </div>
                                    </div>
                                    <div>  
                                    </div>
                                    <div className='space-x-2'>
                                        <a href="/list_air" className="py-2 px-6 bg-violet-500 rounded font-bold text-white">Air</a>
                                        <a href="/list_ikan" className="py-2 px-6 bg-violet-500 rounded font-bold text-white">Ikan</a>
                                    </div>
                                </div>
                            </div>
                        <div className='w-full border border-black py-2 px-5 mt-2 rounded'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <div className='flex space-x-2 items-center'>
                                            <div className='font-semibold text-lg'>
                                                Kolam 2
                                            </div>
                                        </div>
                                    </div>
                                    <div>  
                                    </div>
                                    <div className='space-x-2'>
                                        <a href="/list_air" className="py-2 px-6 bg-violet-500 rounded font-bold text-white">Air</a>
                                        <a href="/list_ikan" className="py-2 px-6 bg-violet-500 rounded font-bold text-white">Ikan</a>
                                    </div>
                                </div>
                            </div>
                        <div className='w-full border border-black py-2 px-5 mt-2 rounded'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <div className='flex space-x-2 items-center'>
                                            <div className='font-semibold text-lg'>
                                                Kolam 3
                                            </div>
                                        </div>
                                    </div>
                                    <div>  
                                    </div>
                                    <div className='space-x-2'>
                                        <a href="/list_air" className="py-2 px-6 bg-violet-500 rounded font-bold text-white">Air</a>
                                        <a href="/list_ikan" className="py-2 px-6 bg-violet-500 rounded font-bold text-white">Ikan</a>
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

export default ListKolam