import React from "react";
import Card from "./Card";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

const Testimonials = (props)=>{
    const reviews = props.reviews;
    const [index,setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index+1>reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random()* reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review={reviews[index]}/>
            <div className="mx-auto flex mt-8 gap-3 text-violet-300 text-3xl font-bold ">
                <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500"><FaChevronLeft/></button>
                <button onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500"><FaChevronRight/></button>
            </div>
            <div className="mt-5">
                <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 rounded-md px-10 py-2 transiton-all font-bold duration-200 text-white text-lg mx-auto">Surprise Me</button>
            </div>
        </div>
    );
}

export default Testimonials;