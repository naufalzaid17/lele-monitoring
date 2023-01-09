import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar'

function InputAir() {
  const [phAir, setPhAir] = useState('');
  const [kadarAir, setKadarAir] = useState('');
  const [warnaAir, setWarnaAir] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    let user = JSON.parse(localStorage.getItem('data'));
    axios.post('https://monitor-pakan-lele-production.up.railway.app/air/input-air', {
      ph_air : phAir,
      kadar_air : kadarAir,
      warna_air : warnaAir
    },{
      headers: { Authorization: `Bearer ${user.token}` }
    }).then(res => {
      console.log(res);
      if(res.status == 200){
        return Swal.fire({
            heightAuto: false,
            icon: "success",
            title: "Berhasil",
            text: "Air berhasil ditambahkan",
            confirmButtonColor: "#8B5CF6",
            confirmButtonText: "Ok",
        }).then((res) => {
            if (res.isConfirmed) window.location.href = "/list-air";
        });
    }
    })
  }

  return (
    <div className="">
      <div className="fixed w-full">
        <Navbar title="Input Kondisi Air"/>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                  <div className="h-screen">
                    <div className="flex h-full">
                      <div className="m-auto w-full px-6">
                        <div>
                          <form onSubmit={submitHandler} className='space-y-5' >
                            <h1 className='text-xl text-center'> INPUT AIR </h1>
                          <div>
                              <label htmlFor="phAir" className="phAir"></label>
                              <input required type="text" value={phAir} onChange={(e) => setPhAir(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='PH Air'/>
                          </div>  

                          <div>
                              <label htmlFor="KadarAir" className="KadarAir"></label>
                              <input required type="text" value={kadarAir} onChange={(e) => setKadarAir(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Kadar Air'/>
                          </div>  

                          <div>
                              <label htmlFor="warnaAir" className="warnaAir"></label>
                              <input required type="text" value={warnaAir} onChange={(e) => setWarnaAir(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Warna Air'/>
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

export default InputAir