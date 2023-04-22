import React from "react";
import PhoneScreen from "./phone-images";
import Input from "./Input";
import { useState } from "react";
import {AiFillFacebook} from "react-icons/ai"

import './tailwind.css'

function App() {

  const [credentials, setCredentials] = useState({
    email:"",
    password:""
  });

  const enabled = credentials.email && credentials.password

  function updateCredentials(event){
    const nameof = event.target.name;
    return(
      setCredentials((prevs)=>{
        if(nameof === "password"){
          const password = event.target.value;
          return({
            email: prevs.email,
            password: password  
        })}
        else if(nameof === "email"){
          const email = event.target.value;
          console.log(credentials)
          return({
            email: email,
            password: prevs.password  
        })
        }
      })
    )   
  }
  

  return (
    <div className="h-full w-full flex  flex-wrap overflow-auto align-baseline mb-[32px] items-center justify-center">
      <div className="md-block h-[538.84px] w-[250px] absolute mr-[287.5px]">
        <PhoneScreen />
      </div>
      <div className="h-[581px] w-[380px] flex bg-logo-pattern bg-no-repeat mr-[32px] mb-[12px] bg-[length:468.32px_634.15px] bg-[top_left_-46px] ]">
    </div>
    <div>
    <div className="w-[350px] h-[400px]  flex justify-center relative">
      <div className="w-[350px] h-[398.66px] border-2 border-grey flex justify-center justify-start">
        <div className="flex  relative justify-center flex-col absolute">
          <a href="#">
            <img className="w-[174px] h-[50] mt-[-135px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt=""/>
          </a>
        </div>

      </div>
      <div className="justify-center absolute mt-[155px]">
      <form className="items-center">
        <Input value={credentials.email} name="email" onChange={updateCredentials} type="text" inbox="Telefon numarası, kullanıcı adı veya e-posta"/>
        <Input value={credentials.password} name="password" onChange={updateCredentials} type="password" inbox="Şifre"/>
        <button disabled={!enabled} className="h-[32px] w-full rounded-sm bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 font-semibold disabled:opacity-80" type="submit">Giriş yap</button>
      </form>
        
        <div className="flex items-center pt-4">
          <div className="h-px bg-gray-300 flex-1"/>
          <span className="px-4 text-xs font-semibold text-gray-500">YA DA</span>
          <div className="h-px bg-gray-300 flex-1"/>
        </div>
        <div className="flex mt-5 items-center justify-center">
          <AiFillFacebook size={20} />
          <a className="ml-2 text-[#385185]" href="#">Facebook ile Giriş Yap</a>
        </div>
        <div className="flex mt-5 items-center justify-center">
        <a className="ml-2 text-xs" href="#">Şifreni mi unuttun?</a>
        </div>
      </div>

      </div>
      <div className="pt-[-200px] h-[62px] w-[350px] mt-2 border-2 border-grey flex justify-center items-center">
      <p> Hesabın yok mu?</p><a className="ml-2 text-blue-500" href="#">Kaydol</a>
      </div>
      <div className="w-[350px] flex items-center justify-center mb-2 mt-2">
      <p>Uygulamayı indir.</p>
      </div>
      <div className="w-[350px] flex items-center mb-5 justify-center">
        <img className="h-[40px] w-[134.28]"src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png" alt="" />
        <img className="h-[40px] w-[134.28]"src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png" alt="" />
      </div>

    </div>
       



    </div>

)

}


export default App;
