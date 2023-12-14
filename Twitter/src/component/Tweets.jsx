import React from 'react'
import Nav from './Nav'
import Trends from './Trends'
import axios from 'axios';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Tweets() {

    const [userImg,setUserImg] = React.useState(localStorage.getItem("userImg"));
    const [userName,setUserName] = React.useState(localStorage.getItem("userName"));
    const [userId,setUserId] = React.useState(localStorage.getItem("userId"));
    const [tweet,setTweet] = React.useState("");
    const [likeNumber,setLikeNum] = React.useState(1);
    const [isFav,setIsFav] = React.useState(false);

    const [allTweets,setAllTweets] = React.useState([])

    const [deleteTweetId, setDeleteTweetId] = useState(null);
    



    React.useEffect(()=>{
        // axios.get('https://657968abf08799dc8046d6be.mockapi.io/Tweets')
        // .then(res=> {
        //     setAllTweets(res.data)
        //     console.log(res.data);
        // })
        getData()
    },[])

    const getData=()=>{
        axios.get('https://657968abf08799dc8046d6be.mockapi.io/Tweets')
        .then(res=> {
            setAllTweets(res.data)
            // console.log(res.data);
        })
    }




    const PostTweet=()=>{
        axios.post('https://657968abf08799dc8046d6be.mockapi.io/Tweets', {
            userId: userId,
            userName: userName,
            userImg: userImg,
            tweet: tweet,
            likeNum: 0,
            isFav : false
          })
          .then(function (response) {
            getData();
            setTweet("");
            // console.log(response);
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




        const likeNumCount = (tweetId)=>{

        axios.get(`https://657968abf08799dc8046d6be.mockapi.io/Tweets/${tweetId}`)
        .then(res=> {
        const currentLikeNum = parseInt(res.data.likeNum)+1;   
        console.log("currentLikeNum"+ currentLikeNum);   
        // setLikeNum (currentLikeNum);
        // console.log(likeNumber);
        // console.log(currentLikeNum +3);

      

        axios.put(`https://657968abf08799dc8046d6be.mockapi.io/Tweets/${tweetId}`,{
            likeNum: currentLikeNum,
         })

         .then(function (response) {
            getData();
            // console.log(response);
          });
        })
        }


        const LikeTweet = (tweetId,userTweetId,userName,userImg,likeNum,tweet)=>{
            axios.post('https://657a2e1b1acd268f9afaca95.mockapi.io/Favourite_tweets', {
                tweetId: tweetId,
                userId: userTweetId,
                userName: userName,
                userImg: userImg,
                tweet: tweet,
                likeNum: likeNum,

                isFav : true,
                User_fav_id: userId
              })
              .then(function (response) {
                setIsFav(true);
                console.log(response);

                showToastMessage()
              })
        }


         const showToastMessage = () => {
         toast.success("Added to your Favourite page", {
         position: toast.POSITION.BOTTOM_CENTER,
         
    });
  };




  return (
    <>
    <div className=" flex justify-between">
    <Nav/>

    <div className='flex flex-col border-l border-r'>
    <div className='flex items-center h-[10vh] w-[45vw] p-2 pl-6 border-b'>
        <p className='font-bold text-xl'>Home</p>
    </div>
    
    <div className='flex flex-col h-[32vh] border-b'>
     <div className='flex h-[25vh] '>
      <div className='w-[8vw] flex justify-center pt-2'>
        <img className='rounded-full h-[12vh]' src={userImg}/>
      </div>
      <div>
        <textarea value={tweet} onChange={(e)=>{setTweet(e.target.value)}} className="h-[22vh] w-[35vw] font-bold p-2 pt-6 pl-4" placeholder='What is happening?!'/>
      </div>
     </div>
     <div className='flex justify-end pb-2 pr-3'>
     <button onClick={PostTweet} className='bg-[rgba(29,155,240,0.9)] py-2 pl-6 pr-6 mr-4 rounded-full font-bold text-white'>Post</button>
     </div>
    </div>

    <div className='w-[45vw] pb-20'>
        {allTweets.toReversed().map(item=>(
            <div>
            <div className='flex justify-between p-2 pl-4 '>

                <div className='flex gap-4 items-center pb-4'>
                <img className="rounded-full h-[10vh]" src={item.userImg}></img>
                <div>
                <p className='font-bold '>{item.userName}</p>
                <p>{item.tweet}</p>

                <div className='flex gap-2 mt-2'>

                <button onClick={()=>likeNumCount(item.id)} className="material-symbols-outlined hover:text-[rgba(29,155,240,0.9)] ">thumb_up</button>
                <p>{item.likeNum}</p>
                {/* {isFav === false? (
                <button onClick={()=>{LikeTweet(item.id,item.likeNum,item.tweet)}} className="material-symbols-outlined hover:text-[red]">favorite</button>
                ):( */}
                <button onClick={()=>{LikeTweet(item.id,item.userId,item.userName,item.userImg,item.likeNum,item.tweet)}} className="material-symbols-outlined hover:text-[red]">favorite</button>
                <ToastContainer />

                {/* )
            
            } */}
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

