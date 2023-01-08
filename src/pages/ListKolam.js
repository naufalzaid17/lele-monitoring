import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

function ListKolam() {

    const [Kolam, setKolam] = useState([]);

    const getData = async() =>{
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/kolam/view-kolam', {
            headers: { Authorization: `Bearer ${user.token}` }
        });

        setKolam(data.result);
        

    }

    useEffect(() => {
        getData();
    })

  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="List Kolam"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="py-16 px-5">
                    <div className="h-screen">
                        
                        {
                            Kolam.map((a, index) => {
                                return <div key={index} className='w-full border border-black py-2 px-5 mt-2 rounded hover:bg-violet-500 hover:text-white'>
                                <a href={"/kolam/"+a.kolam_id} className='flex justify-between items-center'>
                                    <div>
                                        <div className='flex space-x-2 items-center'>
                                            <div className='font-semibold text-lg'>
                                               Kolam {a.kolam_id}
                                            </div>
                                        </div>
    
                                    </div>
                                </a>
                            </div>
                                
                        //         <div key={index} className='w-full border border-black py-2 px-5 mt-2 rounded'>
                        //         <div className='flex justify-between items-center'>
                        //             <div>
                        //                 <div className='flex space-x-2 items-center'>
                        //                     <div className='font-semibold text-lg'>
                        //                         Kolam {a.kolam_id}
                        //                     </div>
                        //                 </div>
                        //             </div>
                        //             <div>  
                        //             </div>
                        //             <div className='space-x-2'>
                        //                 <a href="/list-air" className="py-2 px-6 bg-violet-500 rounded font-bold text-white">Air</a>
                        //                 <a href="/list-ikan" className="py-2 px-6 bg-violet-500 rounded font-bold text-white">Ikan</a>
                        //             </div>
                        //         </div>
                        // </div>
                            })
                        }



                    </div>



                </div>
            </div>

            <div id="footer" className='fixed w-full md:w-1/2 bg-white py-2 bottom-0'>
                    <div className="flex justify-center space-x-2">
                        {/* <button className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-5 rounded font-bold hover:text-white'>Aktifkan</button> */}
                        <a href='/input-kolam' className='border border-violet-500 text-violet-500  hover:bg-violet-500 py-2 px-12 rounded font-bold hover:text-white'>Tambah</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ListKolam