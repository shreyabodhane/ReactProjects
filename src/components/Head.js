import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head =() => {

const dispatch =useDispatch();

  const toggleMenuHandler =() =>{
    dispatch(toggleMenu());
  };

    return <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1  ">
         <img onClick ={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
         alt="menu" src="https://th.bing.com/th/id/OIP.eQDSOvXEZN6RHnbA6yP7CQHaHa?pid=ImgDet&rs=1"/>

         <img className="h-12 mx-2"
         alt="youtubelog" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
        </div>
        <div className=" col-span-10 px-10">
          <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
          <button className="border border-gray-400 px-5 py-2 rounded-r-full">Search</button>
        </div>
        <div className="col-span-1">
        <img  className="h-10"
        alt="user" src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"/>
     </div>
    </div>
};

export default Head;