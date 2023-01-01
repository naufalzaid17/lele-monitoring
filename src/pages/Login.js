import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import axios from 'axios';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem('data');
        if(data !== null){
            window.location.href = "home"
        }
    }, []);

    const formHandler = (e) => {
        e.preventDefault();
        axios.post("https://monitor-pakan-lele-production.up.railway.app/login", {
            username: username,
            password: password,
        }).then((res) => {  
            localStorage.setItem('data', JSON.stringify(res.data));
            setUsername('');
            setPassword('');
            alert("Berhasil login");
            window.location.href = "/home"
        }).catch((error) => {
            // console.log(error.response.data.message);
            // console.log(error.response.data);
            if(error.response.data.data.length > 0){
                setErrorMessage(error.response.data.data);
                console.log(errorMessage);
            }
            if(error.response.status !== 200){
                alert("Username atau password salah");
            }
            setPassword('');

            
        });
    }
    return(
        <div className="z-0">
        <div className="flex justify-center ">
            <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
                <div className="h-screen">
                    <div className="flex h-full">
                        <div className='m-auto w-1/2'>
                            <div>
                                <form onSubmit={formHandler} className='space-y-5'>
                                <p className="text-xl text-center text-">Monitor Pakan Ikan Lele</p>
                                    <div>
                                        <label htmlFor="username" className="username"></label>
                                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Username'/>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="password"></label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-3 px-6 border border-black rounded" placeholder='Password'/>
                                    </div>
                                    <div>
                                        <button type="submit" className="py-3 px-6 bg-violet-500 w-full text-white rounded">Login</button>
                                    </div>
                                    <div>
                                        <a href="/register" className='py-3 text-right mb-5 hover:text-violet-500'>belum punya akun ? register disini!</a>
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

export default Login