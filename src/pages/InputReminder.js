import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar'

function InputReminder() {
    const [inputTime, setInputTime] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem('data'));
        axios.post('https://monitor-pakan-lele-production.up.railway.app/timer/input-timer', {
            waktu: inputTime   
        },{
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => {
            if(res.status == 201){
                return Swal.fire({
                    heightAuto: false,
                    icon: "success",
                    title: "Berhasil",
                    text: "Reminder berhasil ditambahkan",
                    confirmButtonColor: "#8B5CF6",
                    confirmButtonText: "Ok",
                }).then((res) => {
                    if (res.isConfirmed) window.location.href = "/list-reminder";
                });
            }
        }).catch((error) => {
            console.log(error);
        })
        
    }
    return (
        <div className="">
            <div className="fixed w-full">
                <Navbar title="Input Reminder" />
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                    <div className="h-screen">
                        <div className="flex h-full">
                            <div className="m-auto w-full px-6">
                                <div>
                                    <form onSubmit={submitHandler}  className='space-y-5'>
                                        <div className='flex justify-center space-y-5'>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-center">Set Time</p>
                                        </div>


                                        <div className='flex justify-center'>
                                            <input  type="time" name="" id="" value={inputTime} onChange={(e) => setInputTime(e.target.value)} className="w-1/2 py-3 px-6 border border-black rounded" required />
                                        </div>

                                        <div>
                                            <p className="text-sm text-center">Silahkan input jam dan menit untuk mengatur jeda atau periode reminder, kemudian submit</p>
                                        </div>

                                        <div className='flex justify-center text-center'>
                                            {/* <button type="submit" className="py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Submit</button> */}
                                            <button type='submit' className="py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Submit</button>
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

export default InputReminder;