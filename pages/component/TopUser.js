import { useEffect ,useState} from "react"
import Tu from "../../styles/TopUser/Topuser.module.css"
import {BsPlusLg} from "react-icons/bs"
import {BsDashLg} from "react-icons/bs"
import {BsStarFill} from "react-icons/bs"
import { useRouter } from "next/router"
const topuser=()=>{
    const[click0,setClick0]=useState(0)
    const[click1,setClick1]=useState(0)
    const[click2,setClick2]=useState(1)
    const[topuser,setTopuser]=useState([])
    const router=useRouter()
    useEffect(()=>{
        const Topuser=()=>{
        fetch("http://localhost:4000/user/top-users")
        .then((res)=>res.json())
        .then((data)=>{
            console.log('usr',data);
            setTopuser(data)
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
        {
            click0===0?(
            <div className={Tu.div}>
              <button onClick={()=>setClick0(1)} className={Tu.btn1}><BsPlusLg color="white"/></button>
              {/* <img src={} /> */}
              {
                topuser.slice(0,1).map((item,index)=>{
                    return(
                        <>
                        <div 
               className={Tu.div8}
               >
                   <p 
                   className={Tu.p}
                   >
                       {item.username}
                   </p>
                   <div 
                   className={Tu.div6}
                   >
                   <img src={item.avatar}
                     className={Tu.img1}
                     onError={(e)=>{
                     e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }} 
                    />
                   </div>
                   </div>
               </>
                    )
                })
              }
            </div>
            ):(
                <div className={Tu.div1}>
                <button onClick={()=>setClick0(0)} className={Tu.btn}><BsDashLg /></button>
                {
                topuser.slice(0,1).map((item,index)=>{
                    return(
                        <>
                        <div 
                     className={Tu.div8}
                    >
                   <p 
                   className={Tu.p}
                   >
                       {item.username}
                   </p>
                   <div 
                   className={Tu.div6}
                   >
                   <img src={item.avatar}
                     className={Tu.img1}
                     onError={(e)=>{
                     e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }} 
                    />
                   </div>
                   </div>
                   <>
                   {
                    topuser.bio ?( 
                    <div className={Tu.bio}>
                    <p>{item.bio} </p>
                    </div>
                    ):(
                        <>
                        <p className={Tu.p1}> This user has not specified a biography yet</p>
                        <div  className={Tu.d}>
                        <BsStarFill/>
                        <p className={Tu.p2}>{item.averageScore} </p>
                        </div>
                        </>
                    )
                   }
               </>

               </>
                    )
                })
              }
                </div>
            )
        }
         {
            click1===0?(
            <div className={Tu.div11}>
              <button onClick={()=>setClick1(1)} className={Tu.btn1}><BsPlusLg color="white"/></button>
              {/* <img src={} /> */}
              {
                topuser.slice(1,2).map((item,index)=>{
                    return(
                        <>
                        <div 
               className={Tu.div8}
               >
                   <p 
                   className={Tu.p}
                   >
                       {item.username}
                   </p>
                   <div 
                   className={Tu.div6}
                   >
                   <img src={item.avatar}
                     className={Tu.img1}
                     onError={(e)=>{
                     e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }} 
                    />
                   </div>
                   </div>
               </>
                    )
                })
              }
            </div>
            ):(
                <div className={Tu.div12}>
                <button onClick={()=>setClick1(0)} className={Tu.btn}><BsDashLg /></button>
                {
                topuser.slice(1,2).map((item,index)=>{
                    return(
                        <>
                        <div 
                     className={Tu.div8}
                    >
                   <p 
                   className={Tu.p}
                   >
                       {item.username}
                   </p>
                   <div 
                   className={Tu.div6}
                   >
                   <img src={item.avatar}
                     className={Tu.img1}
                     onError={(e)=>{
                     e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }} 
                    />
                   </div>
                   </div>
                   <>
                   {
                    topuser.bio ?( 
                    <div className={Tu.bio}>
                    <p>{item.bio} </p>
                    </div>
                    ):(
                        <>
                        <p className={Tu.p1}> This user has not specified a biography yet</p>
                        <div  className={Tu.d}>
                        <BsStarFill/>
                        <p className={Tu.p2}>{item.averageScore} </p>
                        </div>
                        </>
                    )
                   }



               </>

               </>
                    )
                })
              }
                </div>
            )
        }





{
            click2===0?(
            <div className={Tu.div13}>
              <button onClick={()=>setClick2(1)} className={Tu.btn1}><BsPlusLg color="white"/></button>
             
              {
                topuser.slice(2,3).map((item,index)=>{
                    return(
                        <>
                        <div 
               className={Tu.div8}
               >
                   <p 
                   className={Tu.p}
                   >
                       {item.username}
                   </p>
                   <div 
                   className={Tu.div6}
                   >
                   <img src={item.avatar}
                     className={Tu.img1}
                     onError={(e)=>{
                     e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }} 
                    />
                   </div>
                   </div>
               </>
                    )
                })
              }
            </div>
            ):(
                <div className={Tu.div14}>
                <button onClick={()=>setClick2(0)} className={Tu.btn}><BsDashLg /></button>
                {
                topuser.slice(2,3).map((item,index)=>{
                    return(
                        <>
                        <div 
                     className={Tu.div8}
                    >
                   <p 
                   className={Tu.p}
                   >
                       {item.username}
                   </p>
                   <div 
                   className={Tu.div6}
                   >
                   <img src={item.avatar}
                     className={Tu.img1}
                     onError={(e)=>{
                     e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }} 
                    />
                   </div>
                   </div>
                   <>
                   {
                    topuser.bio ?( 
                    <div className={Tu.bio}>
                    <p>{item.bio} </p>
                    </div>
                    ):(
                        <>
                        <p className={Tu.p1}> This user has not specified a biography yet</p>
                        <div  className={Tu.d}>
                        <BsStarFill/>
                        <p className={Tu.p2}>{item.averageScore} </p>
                        </div>
                        </>
                    )
                   }



               </>

               </>
                    )
                })
              }
                </div>
            )
        }
        
        <div className={Tu.bott}>
                <button className={Tu.btn3} onClick={()=>router.push('/SignUp')} > 
               <p className={Tu.p3}> join to us </p>
               </button>
               </div>
        </div>
    )
}
export default topuser