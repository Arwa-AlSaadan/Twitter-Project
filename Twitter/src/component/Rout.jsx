import React from 'react'
import { Routes , Route } from "react-router-dom";
import Tweets from './Tweets';
import UserPage from './UserPage';
import FavouritePage from './FavouritePage';
import SignUp from './SignUp';
import Login from './Login';


export default function Rout() {
  return (
    <>
    <Routes>
        <Route path='/Tweets' element={<Tweets/>}></Route>
        <Route path='/UserPage/:id' element={<UserPage/>}></Route>
        <Route path='/FavouritePage' element={<FavouritePage/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/' element={<Login/>}></Route>
    </Routes>
    </>
  )
}
