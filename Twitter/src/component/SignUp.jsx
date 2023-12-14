import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const navigate = useNavigate("");

    const [name,setName] = React.useState("");
    const [img,setImg] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");

    const [nameMsg,setNameMsg] = React.useState("");
    const [imgMsg,setImgMsg] = React.useState("");
    const [emailMsg,setEmailMsg] = React.useState("");
    const [passwordMsg,setPasswordMsg] = React.useState("");

    const Register=()=>{
        let emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
        if (name.length <= 4){
            setNameMsg("Name should be more than 4 characters")
        }else if(img === ""){
            setImgMsg("Please enter image URL")
        }else if(!emailcheck.test(email)){
            setEmailMsg("Email is invalid")
        }else if(password.length<=8){
            setPasswordMsg("Password should be more than 8 characters")
        }else{
            axios.post('https://657968abf08799dc8046d6be.mockapi.io/Twitter_users', {
                name: name,
                img: img,
                email: email,
                password: password,
              })
              navigate("/Login")
        }

    }


  return (
    <>
    <div className="h-screen flex">
        <div className=" h-screen w-[50vw] rounded-r-[7rem] bg-cover bg-[url('https://static.srpcdigital.com/styles/1200x600/public/2023-10/357772.jpeg')]">
        </div>
        <div className=" h-screen w-[45vw] flex flex-col justify-center items-center ">
            <div className='flex flex-col justify-center items-center '>
                <p className="font-bold text-2xl mb-8">Sign up in X</p>
                <div className="flex flex-col gap-3 w-[25vw]">
                    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter name' className="border-2 p-2 rounded-md"></input>
                    <p>{nameMsg}</p>
                    <input type='text' value={img} onChange={(e)=>{setImg(e.target.value)}}  placeholder='Enter image (URL)' className="border-2 p-2 rounded-md"></input>
                    <p>{imgMsg}</p>
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" className="border-2 p-2 rounded-md"></input>
                    <p>{emailMsg}</p>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password" className="border-2 p-2 rounded-md"></input>
                    <p>{passwordMsg}</p>
                    <button onClick={Register} className="bg-black text-white font-bold rounded-2xl p-3 mt-2 hover:bg-[rgba(29,155,240,0.8)] hover:text-black">Register</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
