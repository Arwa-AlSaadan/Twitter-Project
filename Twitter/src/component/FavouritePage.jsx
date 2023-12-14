import React from 'react'
import Nav from './Nav'
import Trends from './Trends'
import axios from 'axios';

export default function FavouritePage() {

    const [userId,setUserId] = React.useState(localStorage.getItem("userId"));
    const [favouriteTweets,setFavouriteTweets] = React.useState([])

    React.useEffect(()=>{
        axios.get('https://657a2e1b1acd268f9afaca95.mockapi.io/Favourite_tweets')
        .then(res=> {
            const foundTweets = res.data.filter((item)=> item.User_fav_id === userId)
            setFavouriteTweets(foundTweets)
            console.log(foundTweets);
        })
    },[])



  return (
    <>
    <div className=" flex justify-between">
    <Nav/>

    <div className='flex flex-col'>
    <div className='flex items-center h-[10vh] w-[45vw] p-2 pl-6 border-b'>
        <p className='font-bold text-xl'>Favorites Tweet</p>
    </div>



    <div className='w-[45vw] pb-20'>
        {favouriteTweets.toReversed().map(item=>(
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
                {/* {isFav === false? (
                <button onClick={()=>{LikeTweet(item.id,item.likeNum,item.tweet)}} className="material-symbols-outlined hover:text-[red]">favorite</button>
                ):( */}
                <button  className="material-symbols-outlined hover:text-[red]">favorite</button>
                {/* )
            
            } */}
                </div>

                </div>
                
                
                </div>
               

                {/* <div className="relative">
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
                </div> */}

                
                

                
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
