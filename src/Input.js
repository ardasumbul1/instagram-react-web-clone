import React from "react";
import './tailwind.css'
import { useState } from "react";

function Input(props){

    const [show,setShow] = useState(false)
    const [type,setType] = useState("text")
    function changeVisibility(event){
        if(show){
            setShow(!show)
            return(
                setType("text")
            )
        }else{
            setShow(!show)
            return(
                setType("password")
            )
        }
    }

    return(
            <label className="block relative">
                <input required={true} className="bg-zinc-50 border mb-[5px] rounded-sm w-[259.33px] h-[36px] text-xs px-2 focus:border-gray-400 outline-none text-ellipsis valid:pt-3 peer" type={type} onChange={props.onChange} name={props.name} value={props.value}/>
                <small className="absolute left-2 text-xs cursor-text text-gray-500 pointer-events-none transition-all translate-y-1/2 peer-valid:text-[9px] peer-valid:translate-y-[3px]">{props.inbox}</small>
                {props?.name === "password" && 
                    <button type="button" onClick={changeVisibility} className="absolute bottom-2 text-[14px] top-0 pb-2 right-2 font-medium text-black h-full flex items-center">
                    {show ? "Göster":"Gizle"} 
                    </button>
                }
            </label>

        

    )
}

export default Input;