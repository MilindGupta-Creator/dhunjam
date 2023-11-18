import React, { useEffect, useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        username: "DJ@4",
        password: "Dhunjam@2023",
    });

    useEffect(() =>{
        if(localStorage.getItem('user-info')){
            //history.push("/add")
        }
      }, [])


    const login = async ()=>{
        let datas = {username:data.username,password:data.password};
        let response = await fetch("https://stg.dhunjam.in/account/admin/login",{
            method:'post',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
            },
            body: JSON.stringify(datas)
        });
        response = await response.json();
        localStorage.setItem("user-info", JSON.stringify(response))
        console.log("response",response);


    }

  return (
    <div className='container'>
        <h2 className='head'>Venue Admin Login</h2>
        <input className='logininput' type="text" placeholder='username' value={data.username} onChange={(e)=>setData((prevdata)=>({
            ...prevdata,username:e.target.value,
        }))} />
        <input className='logininput' type="password" name="" id="" placeholder='password' value={data.password} onChange={(e) => {
                        setData((prevData) => ({
                            ...prevData,
                            password: e.target.value,
                        }));
        }} />
        <Link to='/dashboard'>
        <button className='submit' onClick={login}>Sign in</button>
        </Link>
        

    </div>
  )
}

export default Login