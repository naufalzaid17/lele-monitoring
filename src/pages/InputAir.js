import React from 'react'
import Navbar from '../components/Navbar'

function InputAir() {
  return (
    <div className="">
      <div className="fixed w-full">
        <Navbar title="Input Kondisi Air"/>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                  <div className="h-screen">
                    <div className="flex h-full">
                      <div className="m-auto w-full">
                        <div>
                          <form action="" method="post" >
                            <div className='space-y-8 w-4/6 m-auto'>
                              <div>
                                <label htmlFor="ph_air"></label>
                                <input type="text" name="ph_air" id="" className="border border-black rounded w-full py-3 px-6" placeholder='Masukan PH pada air'/>
                              </div>
                              <div>
                                <label htmlFor="kadar_air"></label>
                                <input type="text" name="kadar_air" id="" className="border border-black rounded w-full py-3 px-6" placeholder='Masukan Kadar pada air'/>
                              </div>
                              <div>
                                <label htmlFor="warna_air"></label>
                                <input type="text" name="warna_air" id="" className="border border-black rounded w-full py-3 px-6" placeholder='Masukan Warna pada air'/>
                              </div>

                            </div>
                            <div className="fixed w-full md:w-1/2 bg-white py-2 bottom-0">

                            <div className='text-center botttom-0 mb-2'>
                              {/* <button type="submit" className="border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-5 rounded font-bold hover:text-white">Submit</button> */}
                              <a href='/list_air' className="border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-5 rounded font-bold hover:text-white">Submit</a>
                            </div>
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

export default InputAir