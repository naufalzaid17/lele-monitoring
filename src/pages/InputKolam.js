import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function InputKolam() {
  const [jumlahLele, setJumlahLele] = useState('');
  const [avgBerat, setAvgBerat] = useState('');
  const [luasKolam, setLuasKolam] = useState('');
  

  const submitHandler = (e) => {
    e.preventDefault();

    let user = JSON.parse(localStorage.getItem('data'));
    axios.post('https://monitor-pakan-lele-production.up.railway.app/kolam/input-kolam', {
      jumlah_lele : jumlahLele,
      berat_rata : avgBerat,
      luas_kolam : luasKolam
    },{
      headers: { Authorization: `Bearer ${user.token}` }
    }).then(res => {
      console.log(res);
    })
  }

  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="Input Kolam"/>
        </div>
        <div>InputKolam</div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
            <div className="h-screen">
              <div className="flex h-full">
                <div className="m-auto w-full px-6">
                  <div>
                    <form onSubmit={submitHandler} className='space-y-5'>
                        <h1 className='text-xl text-center'> INPUT KOLAM </h1>
                        <div>
                            <label htmlFor="jumlahLele" className="jumlahLele"></label>
                            <input type="text" value={jumlahLele} onChange={(e) => setJumlahLele(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Jumlah Lele'/>
                        </div>  

                        <div>
                            <label htmlFor="avgBerat" className="avgBerat"></label>
                            <input type="text" value={avgBerat} onChange={(e) => setAvgBerat(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Jumlah Berat rata-rata'/>
                        </div>  

                        <div>
                            <label htmlFor="luasKolam" className="luasKolam"></label>
                            <input type="text" value={luasKolam} onChange={(e) => setLuasKolam(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Luas Kolam Lele'/>
                        </div>

                        <div>
                            <button type="submit" className="py-3 px-6 bg-violet-500 w-full text-white rounded">Submit</button>
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

export default InputKolam