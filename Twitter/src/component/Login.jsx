import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate("");

    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");

    const [checkMsg,setCheckMsg] = React.useState("");


    const Login=()=>{
        axios.get('https://657968abf08799dc8046d6be.mockapi.io/Twitter_users')
        .then(res=> {
          const foundUser = res.data.find((item)=> item.email === email && item.password === password)
          console.log(res);

          if (foundUser){
            localStorage.setItem("userName",foundUser.name)
            localStorage.setItem("userId",foundUser.id)
            localStorage.setItem("userImg",foundUser.img)

            navigate("/Tweets")
          }else{
            setCheckMsg("Email or password is not correct")
          }
        })
    }


  return (
   <>
   <div className="h-screen flex">
        <div className=" h-screen w-[50vw] rounded-r-[7rem] bg-full bg-[url('https://static.srpcdigital.com/styles/1200x600/public/2023-10/357772.jpeg')]">
        </div>
        <div className=" h-screen w-[45vw] flex flex-col justify-center items-center ">
            <div className='flex flex-col justify-center items-center '>
                <p className="font-bold text-2xl mb-8">Login to X</p>
                <div className="flex flex-col gap-3 w-[25vw]">
                    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" className="border-2 p-2 rounded-md"></input>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}placeholder="Enter password" className="border-2 p-2 rounded-md"></input>
                    <p className="text-center">{checkMsg}</p>
                    <button onClick={Login} className="bg-black text-white font-bold rounded-2xl p-2 mt-2 hover:bg-[rgba(29,155,240,0.8)] hover:text-black">Login</button>
                    <div className="flex justify-center gap-8">
                    <p>Don't have an account? </p>

                    <Link to={'/SignUp'}>
                    <p className="font-bold text-blue">Sign Up</p>
                    </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
