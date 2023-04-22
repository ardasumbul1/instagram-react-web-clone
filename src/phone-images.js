import React from "react";
import { useState } from "react";
import './tailwind.css';
import { useEffect } from 'react';

const urls = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"

];



function PhoneScreen() {

    const [index,setIndex] = useState(0);


    useEffect(() => {
        const timerId = setTimeout(() => {
        setIndex((prev)=>{
            console.log(prev);
            clearInterval();
            clearInterval();
            return (prev +1) %4;
            
        });
        }, 3000);
        return () => clearTimeout(timerId);
      }, [index]);

    return(
        <div>
            <img className=" transition-opacity transition-all ease-linear"src={urls[index]} alt=""/>
        </div>
    )
};

export default PhoneScreen