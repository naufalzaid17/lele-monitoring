import React from 'react'
import Navbar from '../components/Navbar'

function ListAir() {
  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="List Air"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className=" py-16 px-5">
                    <div className='w-full border border-black py-2 px-5 mt-2 rounded'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <div className='flex space-x-2 items-center'>
                                    <div>
                                    </div>
                                    <div className='font-semibold text-lg'>
                                        Air 1
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='py-2 px-6 bg-violet-500 rounded font-bold text-white'>Pilih</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border border-black py-2 px-5 mt-2 rounded'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <div className='flex space-x-2 items-center'>
                                    <div>
                                    </div>
                                    <div className='font-semibold text-lg'>
                                        Air 2
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='py-2 px-6 bg-violet-500 rounded font-bold text-white'>Pilih</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border border-black py-2 px-5 mt-2 rounded'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <div className='flex space-x-2 items-center'>
                                    <div>
                                    </div>
                                    <div className='font-semibold text-lg'>
                                        Air 3
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='py-2 px-6 bg-violet-500 rounded font-bold text-white'>Pilih</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div id="footer" className='fixed w-full md:w-1/2 bg-white py-2 bottom-0'>
                    <div className="flex justify-center space-x-2">
                        <button className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-5 rounded font-bold hover:text-white'>Hitung</button>
                        <a href='/input_air' className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-5 rounded font-bold hover:text-white'>Tambah</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ListAir