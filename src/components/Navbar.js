import React, { useEffect, useState } from "react";
import {Transition, Dialog} from "@headlessui/react";
import axios from "axios";

export default function Navbar(props) {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});

    const logoutButton = () => {
      localStorage.removeItem('data');
      window.location.href = "/"
    }

 
    useEffect(() => {
      let data = JSON.parse(localStorage.getItem('data'));
      axios.get('https://monitor-pakan-lele-production.up.railway.app/view-user/'+data.user_id,{
          headers: { Authorization: `Bearer ${data.token}` }
      }).then(res => {
          setUser(res.data.profile);
      });
    }, []);
    return (
      <div className="flex justify-center bg-white z-10">
        <div className="w-full md:w-1/2 lg:w-2/6 py-2 px-5">
          <div className="flex justify-between">
            {/* <div className="z-20 bg-red-100 w-5/12 h-screen"></div> */}
            <div>
                <button className="mr-4" onClick={() => setOpen(!open)} type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                  </svg>
                </button> 
                      
                {open &&
                  <div className="absolute top-10 bg-white px-2 border border-black rounded-md py-2 ">
                    <div className="flex flex-col space-y-3" >
                      <div className="flex space-x-1 items-center rounded py-1 px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <div className="">
                          {user.nama_user}
                        </div>
                      </div>
                      <button onClick={() => logoutButton()} className="flex space-x-1 items-center hover:bg-red-500 hover:text-white rounded py-1 px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        <div>Logout</div>
                      </button>
                    </div>
                  </div>
                }
            </div>
            
            <div>{props.title}</div>
            <div>
              <a href="/home" className="">
                LEMO
              </a>
            </div>
          </div>
        </div>
      </div>

    );
}
