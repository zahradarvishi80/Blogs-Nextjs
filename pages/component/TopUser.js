import { useEffect } from "react"
import Tu from "../../styles/TopUser/Topuser.module.css"

const topuser=()=>{

    useEffect(()=>{
        const Topuser=()=>{
        fetch("http://localhost:4000/user/top-users")
        .then((res)=>res.json())
        .then((data)=>{
            console.log('usr',data);
        })
        }
       
       
        Topuser()
    },[])

    return(
        <div>
        <img src="https://uploads-ssl.webflow.com/61e60131d76cdc84804f0cc3/61e60131d76cdcc14d4f0cfe_Illustration.png" 
        alt="topblog"
        className={Tu.img}
        />
        </div>
    )
}
export default topuser