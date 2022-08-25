import {BsPlusLg} from "react-icons/bs"
import {BsDashLg} from "react-icons/bs"
import { useState } from "react"
import signup from "../../styles/Signup/Signup.module.css"
import Cookies from 'universal-cookie';
import { useRouter } from "next/router";
const Signup=()=>{
    const [name,setName]=useState("")
    const [username,setUsername]=useState("")
    const cookies =new Cookies()
    const router=useRouter()


  console.log("name",name);
  console.log(username,"username");

  const SignUP=()=>{
    console.log("us",username);
    console.log("name",name);   
    fetch('http://localhost:4000/user/signup',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        username:username,
        name:name,
        // 
      })
    })
    .then((response)=>response.json())
    .then((data)=>{
      
      console.log('data : ', data);
      console.log("dataaaaaaa",data);

      if (data.token) {
        // do some stuff
        console.log(data.token);
        cookies.set('ut', data.token)
        router.push('/SignIn')
        return 
      }

      alert(data.msg)
    
    // }
    });


  }




    return(
        <div className={signup.div1}>
         <img src="https://uploads-ssl.webflow.com/61e60131d76cdc84804f0cc3/61e60131d76cdcc14d4f0cfe_Illustration.png" 
        alt="topblog"
        className={signup.img}
        />
        <div className={signup.abs}
        >
        <p className={signup.p}>Your Wellcome</p>
       
        <div className={signup.main1}>
            <p className={signup.p1}>Name:</p>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" className={signup.input} />
        </div>
        <div className={signup.main1}>
            <p className={signup.p1}>Username:</p>
            <input onChange={(e) => setUsername(e.target.value)} value={username}placeholder="Enter Your userame" className={signup.input} />
        </div>
        <div className={signup.main1}>
           <button className={signup.btn} onChange={(e)=>setUsername(e.target.value)} onClick={()=>SignUP()} >Sign Up </button>
        </div>
        </div>
    
        </div>
    )
}
export default Signup