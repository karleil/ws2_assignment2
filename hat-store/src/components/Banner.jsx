import React from "react";

function Banner() {
return (
    <div className="">
    <img src="./banner.jpeg" alt="banner picture"  className="brightness-50 absolute" />
    <div className="relative text-white text-center pt-80">
        <h1 className="text-8xl  font-bold ">Your Head's <br/> New Best Friend</h1>
        <button className=" font-semibold text-lg px-3 py-1.5 rounded-2xl hover:bg-white text-white hover:text-green-500 my-8 border-solid border-2 border-green-500 hover:border-white">Explore Products</button>
    </div>
    
</div>
)

}

export default Banner;