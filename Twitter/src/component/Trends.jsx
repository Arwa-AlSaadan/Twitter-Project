import React from 'react'
import axios from 'axios'

export default function Trends() {

    const [userId,setUserId] = React.useState(localStorage.getItem("userId"));
    const [allUsers,setAllUsers] = React.useState([])

    React.useEffect(()=>{

        axios.get('https://657968abf08799dc8046d6be.mockapi.io/Twitter_users')
        .then(res=> {
          const foundUsers = res.data.filter((item)=> item.id !== userId)
          setAllUsers(foundUsers)
        //   console.log(foundUsers);
        })

    },[]);


  return (
    <>
    <div className=' h-screen w-[35vw] mb-40'>
        <div className='h-[75vh] flex justify-center items-center '>
            <div className='h-[65vh] w-[30vw] rounded-lg bg-gray-100'>
                <div>
                    <p className='font-bold text-xl p-6'>What’s happening</p>
                </div>
                <div className='pl-6 pr-6'>
                <div dir='rtl'>
                    <p className='font-bold'>#تطبيق_هاوي</p>
                </div>
                <p className='text-sm text-gray-600'>عندك هواية .. عندنا تطبيق</p>
                <p className='text-sm text-gray-600 pb-4'>Promoted by Hawi | هاوي</p>
                <hr/>
                </div>

                <div className='pl-6 pr-6'>
                    <div dir='rtl'>
                    <p className='font-bold pt-4'>#الرخصه_المهنيه</p>
                    </div>
                    <p className='text-sm text-gray-600 pb-4'>23.7K posts</p>
                    <hr/>
                </div>

                <div className='pl-6 pr-6'>
                    <div dir='rtl'>
                    <p className='font-bold pt-4'>#الرياض_اليوم</p>
                    </div>
                    <p className='text-sm text-gray-600 pb-4'>7,025 posts</p>
                    <hr/>
                </div>

                <div className='pl-6 pr-6'>
                    <div dir='rtl'>
                    <p className='font-bold pt-4'>#يوم_الخميس</p>
                    </div>
                    <p className='text-sm text-gray-600 pb-4'>2K posts</p>
                    <hr/>
                </div>
            </div>
        </div>



        <div className='h-[50vh] flex justify-center items-center'>
            <div className='h-[45vh] w-[30vw] rounded-lg bg-gray-100'>
                <div>
                    <p className='font-bold text-xl p-6'>Who to follow</p>
                </div>
                
                <div >
                {allUsers.slice(0,2).map(item =>(
                <div className='flex pl-6 pt-3 border-b'>

                <div className='flex gap-4 items-center pb-4'>
                <img className="rounded-full h-[10vh]" src={item.img}></img>
                <div>
                <p className='font-bold '>{item.name}</p>
                </div> 

                <div className="pl-24">
                <button className='bg-black text-white font-bold py-1 pl-4 pr-4 rounded-full'>Follow</button>
                </div>  
                </div>
                
            

                </div>

                ))}
                </div>


            


        </div>
    </div>
    </div>
    </>
    
  )
}
