import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function DetailReminder() {
  const { id } = useParams();
  const [timer, setTimer] = useState([]);
  const [inputTime, setInputTime] = useState('')

    const getData = async () => {
        let user = JSON.parse(localStorage.getItem('data'));
        const {data} = await axios.get('https://monitor-pakan-lele-production.up.railway.app/timer/view-timer/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        setTimer(data.timer);
        setInputTime(data.timer.waktu)
    }
    useEffect(() => {
        getData();
    },[])

    const submitHandler = (e) =>{
        e.preventDefault();
        if(inputTime === ""){
            alert('tidak boleh kosong')
        }else{
            let user = JSON.parse(localStorage.getItem('data'));
            axios.put('https://monitor-pakan-lele-production.up.railway.app/timer/update-timer/'+id, {
                waktu: inputTime   
            },{
                headers: { Authorization: `Bearer ${user.token}` }
            }).then(res => {
                if(res.status == 201){
                    window.location.href = "/set_reminder"
                }
            })
        }
        
    }

    const aktifkanButton = () => {
        console.log("asd");
    }

    const deleteButton = () => {
        let user = JSON.parse(localStorage.getItem('data'));
        axios.delete('https://monitor-pakan-lele-production.up.railway.app/timer/delete-timer/'+id, {
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => {
            if(res.status == 200){
                window.location.href = "/set_reminder"
            }
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
                            <div className="m-auto w-1/2">
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
                                            <input  type="time" name="" id="" value={inputTime} onChange={(e) => setInputTime(e.target.value)} className="w-4/6 py-3 px-6 border border-black rounded" />
                                        </div>

                                        <div>
                                            <p className="text-sm text-center">Silahkan input jam dan menit untuk mengatur jeda atau periode reminder, kemudian submit</p>
                                        </div>

                                        <div className='flex justify-center text-center space-x-3'>
                                            {/* <button type="submit" className="py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Submit</button> */}
                                            <div onClick={() => aktifkanButton()} className="cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Aktifkan</div>
                                            <button type='submit' className="py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Update</button>
                                            <div onClick={() => deleteButton()} className="cursor-pointer py-3 px-6 bg-violet-500 w-1/2 text-white rounded font-bold">Delete</div>

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

export default DetailReminder