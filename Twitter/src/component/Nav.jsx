import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Nav() {

    const navigate = useNavigate();
    const [userName,setUserName] = React.useState(localStorage.getItem("userName"));
    const [userId,setUserId] = React.useState(localStorage.getItem("userId"));


    const LogOut=()=>{
        localStorage.clear();
        navigate("/")
    }

  return (
    <>
    <div className='h-screen w-[20vw] flex justify-center pt-20'>
        <div className=' flex flex-col gap-3 font-bold text-xl'>

        <div className='flex pl-6'>
        <img className='h-[5vh] mb-2' src='data:image/png;base64,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'></img>
        </div>


        <Link to="/Tweets">
        <div className='flex items-center gap-2 w-fit pl-4 pr-4 py-2 rounded-full hover:bg-[rgba(29,155,240,0.8)] hover:text-white'>
        <span className="material-symbols-outlined font-bold text-2xl">home</span>
            <p>Home</p>
        </div>
        </Link>

        <div className='flex  items-center gap-2 w-fit pl-4 pr-4 py-2 rounded-full hover:bg-[rgba(29,155,240,0.8)] hover:text-white'>
        <span className="material-symbols-outlined font-bold text-2xl">tag</span>
        <p>Explore</p>
        </div>


        <div className='flex  items-center gap-2 w-fit pl-4 pr-4 py-2 rounded-full hover:bg-[rgba(29,155,240,0.8)] hover:text-white'>
        <span className="material-symbols-outlined font-bold text-2xl">notifications</span>
        <p>Notifications</p>
        </div>


        <div className='flex  items-center gap-2 w-fit pl-4 pr-4 py-2 rounded-full hover:bg-[rgba(29,155,240,0.8)] hover:text-white'>
        <span className="material-symbols-outlined font-bold text-2xl">mail</span>
        <p>Messages</p>
        </div>


        <Link to={"/FavouritePage"}>
        <div className='flex  items-center gap-2 w-fit pl-4 pr-4 py-2 rounded-full hover:bg-[rgba(29,155,240,0.8)] hover:text-white'>
        <span className="material-symbols-outlined">favorite</span>
        <p>Favorites</p>
        </div>
        </Link>


        {/* <div className='flex gap-2'>
        <span class="material-symbols-outlined">tag</span>
        <p>Lists</p>
        </div> */}

        <Link to={`/UserPage/${userId}`}>
        <div className='flex  items-center gap-2 w-fit pl-4 pr-4 py-2 rounded-full hover:bg-[rgba(29,155,240,0.8)] hover:text-white'>
        <span className="material-symbols-outlined font-bold text-2xl">account_circle</span>
        <p>Profile</p>
        </div>
        </Link>


        <div>
        {userName === null ?(
            <div></div>
        ):(
            <div onClick={LogOut} className='flex  items-center gap-2 w-fit pl-4 pr-4 py-2 rounded-full hover:bg-[rgba(29,155,240,0.8)] hover:text-white'>
            <span className="material-symbols-outlined">logout</span> 
             <button>LogOut</button>
            </div>
        )}
        </div>
            
        </div>
    </div>
    </>
  )
}
