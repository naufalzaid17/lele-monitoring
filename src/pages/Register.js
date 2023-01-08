import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Register() {

  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    axios.post('https://monitor-pakan-lele-production.up.railway.app/register', {
      username: username,
      password: password,
      nama_user: nama,
      
    }).then((res) => {
      return Swal.fire({
        heightAuto: false,
        icon: "success",
        title: "Berhasil",
        text: "Akun berhasil dibuat",
        confirmButtonColor: "#8B5CF6",
        confirmButtonText: "Ok",
    }).then((res) => {
      if (res.isConfirmed) window.location.href = "/";
    })
    }).catch((error) => {
      setErrorMessages(error?.response?.data?.data);
      // alert(error?.response?.data.message);
  });
  }

  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="w-full md:w-1/2 lg:w-2/6 bg-slate-50">
          <div className="h-screen">
            <div className="flex h-full">
              <div className="m-auto w-full px-6">
                <div className="text-center py-5">
                  <p className="">REGISTER</p>
                </div>
                <div>
                  {
                    errorMessages.length !== 0 && (
                    <div className="text-center bg-red-100 mb-3 text-sm p-4 rounded-md">
                      {
                        errorMessages.map((error, index) => (
                          <p key={index}>{Object.keys(error)[0]}: {Object.values(error)[0]}</p>                                                      
                        ))
                      }
                    </div>

                    )
                  }
                  <form onSubmit={formHandler}  className="space-y-5">
                    {/* <p className="text-xl text-center text-">
                      Monitor Pakan Ikan Lele
                    </p> */}
                    <div>
                      <label htmlFor="nameUser" className="nameUser"></label>
                      <input
                        type="text"
                        name="nameUser"
                        value={nama} onChange={(e) => setNama(e.target.value)}
                        className="w-full py-3 px-6 border border-black rounded"
                        placeholder="Nama User"
                      />
                    </div>
                    <div>
                      <label htmlFor="username" className="username"></label>
                      <input
                        type="text"
                        name="username"
                        value={username} onChange={(e) => setUsername(e.target.value)}
                        className="w-full py-3 px-6 border border-black rounded"
                        placeholder="Username"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="password"></label>
                      <input
                        type="password"
                        name="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className="w-full py-3 px-6 border border-black rounded"
                        placeholder="Password"
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit"
                        href="/"
                        className="w-full py-3 px-6 bg-violet-500 w-full text-white rounded"
                      >
                        Submit
                      </button>
                      {/* <button type="submit" className="py-3 px-6 bg-violet-500 w-full text-white rounded">Login</button> */}
                    </div>
                    {/* <a href="" className='py-3 px6 text right ml-10 mb-5'>belum punya akun ? register</a> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      F
    </div>
  );
}

export default Register;
