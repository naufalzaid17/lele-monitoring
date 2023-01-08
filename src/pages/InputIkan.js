import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar'

function InputIkan() {
  const [umurIkan, setUmurIkan] = useState('');
  const [beratIkan, setBeratIkan] = useState('');
  const [sizeIkan, setSizeIkan] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    let user = JSON.parse(localStorage.getItem('data'));
    axios.post('https://monitor-pakan-lele-production.up.railway.app/ikan/input-ikan', {
      umur : umurIkan,
      berat : beratIkan,
      ukuran : sizeIkan
    },{
      headers: { Authorization: `Bearer ${user.token}` }
    }).then(res => {
      console.log(res);
      if(res.status == 200){
        return Swal.fire({
            heightAuto: false,
            icon: "success",
            title: "Berhasil",
            text: "Reminder berhasil ditambahkan",
            confirmButtonColor: "#8B5CF6",
            confirmButtonText: "Ok",
        }).then((res) => {
            if (res.isConfirmed) window.location.href = "/list-ikan";
        });
    }
    })
  }

  return (
    <div className="">
        <div className="fixed w-full">
            <Navbar title="Input Ikan"/>
        </div>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="h-screen">
                  <div className="flex h-full">
                    <div className="m-auto w-full px-6">
                      <div>
                        <form onSubmit={submitHandler} className='space-y-5' >

                        <h1 className='text-xl text-center'> INPUT IKAN </h1>
                        <div>
                            <label htmlFor="umurIkan" className="umurIkan"></label>
                            <input type="text" value={umurIkan} required onChange={(e) => setUmurIkan(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Umur Ikan'/>
                        </div>  

                        <div>
                            <label htmlFor="BeratIkan" className="BeratIkan"></label>
                            <input type="text" value={beratIkan} required onChange={(e) => setBeratIkan(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Berat Ikan'/>
                        </div>  

                        <div>
                            <label htmlFor="sizeIkan" className="sizeIkan"></label>
                            <input type="text" value={sizeIkan} required onChange={(e) => setSizeIkan(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Ukuran Ikan'/>
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

export default InputIkan