import head from "../../styles/Header/Header.module.css";
// import Profile from "./Profile";
import Link from "next/link";
import Cookies from 'universal-cookie';
import { useState } from "react";
import {FaUserEdit} from "react-icons/fa";
// import Blogs from "../Dashbord/Blogs"
import { useRouter } from "next/router";
const cookies =new Cookies()
console.log("ppp");
const Headers=()=>{
    const token=cookies.get("ut")
    const [isSelected,setIsSelected] =useState(false)
    const router =useRouter()




    
    return(
      <div  className={head.countainer}>
         <div className={head.Head1}>
          <button className={head.btn}>
          <p className={head.p}>Home</p></button>
          <button className={head.btn}>
          <p className={head.p}>Blogs </p></button>
          <button className={head.btn}>
          <p className={head.p}> TopBlogs </p></button>
          <button className={head.btn}>
          <p className={head.p}> Users</p></button>
         </div>
         <div className={head.Head2}>
          <p className={head.p1}>
          BL<span className={head.span}>OOO</span>GINJA
          </p>
         </div>
         <div className={head.Head3}>
        {/* {token?(
       <>
       <button  className={head.btn2}>
       <FaUserEdit color="black" size={20} />
        <p className={head.p}>
          zahradarvishi
        </p>
       
       </button>
       </>
         ):(
       <> */}
        <button className={head.btn}>
        <p className={head.p}> log in</p>
       </button>

       <button className={head.btn1}>
        <p className={head.p2}>Join</p>
       </button>
       {/* </>
       )


        } */}
        
         </div>
      </div>
  //     <div>
  //     <div className={head.Head}>
  //         <div className={head.item}>
  //       {!token?
  //         <button className={head.btn}>
  //         <Link href={"/SignIn"}>
  //         <p className={head.vorod}>ورود</p>
  //     </Link>
  //   </button>:null}
  //   <div className={head.div} >
  //     <img
  //       src={"/Assets/img/icons8-search-64.png"}
  //       className={head.img1}
  //       onClick={()=>setIsSelected(!isSelected)}
  //     />
  //     {
  //       isSelected ? <input className={head.input} placeholder="جستجو..." /> : null
  //     }
      
  //   </div>

  //   <Link href={"/"}>
  //     <img
  //       src={"/Assets/img/icons8-home-64.png"}
  //       className={head.img2}
  //     />
  //   </Link>
  //   {/* {token ? <Profile /> : null} */}
  // </div>
  // <div className={head.title}>
  //   <p>بلاگین<span className={head.titr}>جا</span></p>
  // </div>
  // {token?  
  //               // <Link href="/SignUp">
  //                  <button onClick={router.push('/SignUp')} className={head.btn}> 
  //         {/* <Link href={"/SignIn"}> */}
  //         <p className={head.vorod}>خروج</p>
  //     {/* </Link> */}
     
  //                   <FiLogOut style={{marginRight:10}} />
       
  //             </button>  :null}
 

                

          
    )
}
export default Headers
{/* 
                    <Link href='/item/Writers'>
                    <p className={head.titr}> 
                    Writers </p>  
                    </Link>
                    <SiWritedotas />
                    <Link href='/item/Blogs'>
                    <p className={head.titr}> Blogs </p>
                    </Link>
                    <ImBlogger2/>
                    {token ? <Profile/> :null}
                </div>
                {token? 
                <Link href="/Dashbord/Blogs">
                    <FaUserEdit size={30} style={{marginRight:15}} />
                {/* <Dashboard/> */}
                {/* </Link>:
                 <div className={head.login}>
                 <Link href={'../SignIn'}>
                 <p className={head.tit}>SignIn</p>
                 </Link>
                 <AiOutlineUser width={30} height={30} style={{marginTop:27}} />
               
                 <Link href={'../SignUp'}>
                 <p className={head.tit}>SignUp</p></Link>
                 <GrLogin width={30} height={30} style={{marginTop:27}} />
             </div> */} 