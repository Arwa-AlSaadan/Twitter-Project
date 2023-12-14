import React from 'react'
import Nav from './Nav'
import Trends from './Trends'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function UserPage() {

    const {id} = useParams();
    const [name,setName] = React.useState(localStorage.getItem("userName"));
    const [img,setImg] = React.useState(localStorage.getItem("userImg"));

    const [userTweets,setUserTweets] = React.useState([])
    const [deleteTweetId, setDeleteTweetId] = useState(null);



    React.useEffect(()=>{
       getData();
    },[])

    const getData=()=>{
        axios.get('https://657968abf08799dc8046d6be.mockapi.io/Tweets')
        .then(res=> {
          setUserTweets(res.data.filter((item)=> item.userId === id))
        //   console.log(res.data.filter((item)=> item.userId === id));
        })
    }

     //DeleteBtn

     const toggleMenu = (tweetId) => {
        setDeleteTweetId(tweetId);
    //   setIsOpen(!isOpen);
    };
  
    const deleteTweet = (id) => {
        axios.delete(`https://657968abf08799dc8046d6be.mockapi.io/Tweets/${id}`)
        .then(function (response) {
            console.log("Done");
            setDeleteTweetId(null);
            getData();
        })
    };




  return (
    <>
    <div className=" flex justify-between">
    <Nav/>
    <div>
    
    <div className=' h-[27vh] w-[45vw] bg-gray-100'>
        <div className='flex items-center'>
        <img className="rounded-full p-8 pr-4 pt-7 h-[40vh]" src={img}></img>
        <p className='p-8 pt-7 font-bold text-2xl'>{name}</p>
        </div>
    </div>
   




   <div className='w-[45vw] pb-20 mt-20'>
        {userTweets.toReversed().map(item=>(
            <div>
            <div className='flex justify-between p-2 pl-4 '>

                <div className='flex gap-4 items-center pb-4'>
                <img className="rounded-full h-[10vh]" src={item.userImg}></img>
                <div>
                <p className='font-bold '>{item.userName}</p>
                <p>{item.tweet}</p>

                <div className='flex gap-2 mt-2'>

                <button className="material-symbols-outlined hover:text-[rgba(29,155,240,0.9)] ">thumb_up</button>
                <p>{item.likeNum}</p>
                <button className="material-symbols-outlined hover:text-[red]">favorite</button>

                </div>

                </div>
                
                
                </div>
               

                <div className="relative">
                <button className="flex justify-end pr-4" onClick={() => toggleMenu(item.id)}>
                        <span className="material-symbols-outlined">more_horiz</span>
                </button>

                {deleteTweetId === item.id  && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    onClick={() => deleteTweet(item.id)}> Delete tweet
                    </button>
                    </div>
                )}
                </div>

                
                

                
            </div>

            <hr/>
            </div>
        ))}
        
    </div>


    </div>

    <Trends/>
    </div>
    </>
  )
}
