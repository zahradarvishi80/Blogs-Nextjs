import T from "../../styles/TopBlog/TopBlog.module.css"
import { useEffect,useState } from "react"
import {BsPlusLg} from "react-icons/bs"
import {BsDashLg} from "react-icons/bs"
const TopBlog=()=>{
    const[top,setTop]=useState([])
    const[click,setClick]=useState(1)
    const[press,setPress]=useState(1)
    const[log,setLog]=useState(0)
    useEffect(()=>{
        const Top=()=>{
            fetch('http://localhost:4000/blog/top-blogs')
            .then((res)=>res.json())
            .then((data)=>{
                console.log("ppp",data);
                setTop(data)
            })

        }
        Top()
    },[])


    return(
        <div className={T.main}>
        <img src="https://uploads-ssl.webflow.com/61e60131d76cdc84804f0cc3/61e60131d76cdcc14d4f0cfe_Illustration.png" 
        alt="topblog"
        className={T.img}
        />
        {log==0?(
                <div className={T.div}>
                  <button onClick={()=>setLog(1)} className={T.btn}><BsPlusLg/></button>
                  {top.slice(0,1).map((item,index)=>{
                    return(
                        <>
                        <div 
                        className={T.div8}
                        >
                            <p 
                            className={T.p}
                            >
                                {item.title}
                            </p>
                            <div 
                            className={T.div6}
                            >
                            <img 
                            className={T.img1}
                             src={item.imgurl}
                              />
                            </div>
                            </div>
                            <div className={T.content}>
                            <p className={T.p1}  dangerouslySetInnerHTML={{__html:item.content.substring(0,450)}}>

                            </p>
                            </div>
                      
                        </>
                    )
                  })}
               </div>
            ):(
                <div className={T.div0}>
                <button onClick={()=>setLog(0)} className={T.btn}><BsDashLg/></button>
                {top.slice(0,1).map((item,index)=>{
                    return(
                        <>
                                 <div 
                        className={T.div8}
                        >
                            <p 
                            className={T.p}
                            >
                                {item.title}
                            </p>
                            <div 
                            className={T.div6}
                            >
                            <img 
                            className={T.img1}
                             src={item.imgurl}
                              />
                            </div>
                            </div>
                        </>
                    )
                  })}
               </div>
            )
        }
        
       {
        click==0?(
        <div className={T.div1}>
            
        <button  className={T.btn} onClick={()=>setClick(1)}><BsPlusLg/></button>
        {top.slice(1,2).map((item,index)=>{
                    return(
                        <>
                        <div 
                        className={T.div8}
                        >
                            <p 
                            className={T.p}
                            >
                                {item.title}
                            </p>
                            <div 
                            className={T.div6}
                            >
                            <img 
                            className={T.img1}
                             src={item.imgurl}
                              />
                            </div>
                            </div>
                            <div className={T.content}>
                            <p className={T.p1}  dangerouslySetInnerHTML={{__html:item.content.substring(0,450)}}>

                            </p>
                            </div>
                      
                        </>
                    )
                  })}
           </div>
        ):(
            <div className={T.div3}>

            <button  className={T.btn} onClick={()=>setClick(0)}><BsDashLg/></button>
            {top.slice(1,2).map((item,index)=>{
                    return(
                        <>
                                 <div 
                        className={T.div8}
                        >
                            <p 
                            className={T.p}
                            >
                                {item.title}
                            </p>
                            <div 
                            className={T.div6}
                            >
                            <img 
                            className={T.img1}
                             src={item.imgurl}
                              />
                            </div>
                            </div>
                        </>
                    )
                  })}
            </div>
        )
       }
       {
        press==0?(
             <div className={T.div2}>
                
         <button  className={T.btn} onClick={()=>setPress(1)}><BsPlusLg/></button>
         {top.slice(2,3).map((item,index)=>{
                    return(
                        <>
                        <div 
                        className={T.div8}
                        >
                            <p 
                            className={T.p}
                            >
                                {item.title}
                            </p>
                            <div 
                            className={T.div6}
                            >
                            <img 
                            className={T.img2}
                             src={item.imgurl}
                              />
                            </div>
                            </div>
                            <div className={T.content}>
                            <p className={T.p1}  dangerouslySetInnerHTML={{__html:item.content.substring(0,450)}}>

                            </p>
                            </div>
                      
                        </>
                    )
                  })}
            </div>
        ):(
            <div className={T.div4}>

            <button  className={T.btn} onClick={()=>setPress(0)}><BsDashLg/></button>
            {top.slice(2,3).map((item,index)=>{
                    return(
                        <>
                                 <div 
                        className={T.div8}
                        >
                            <p 
                            className={T.p}
                            >
                                {item.title}
                            </p>
                            <div 
                            className={T.div6}
                            >
                            <img 
                            className={T.img2}
                             src={item.imgurl}
                              />
                            </div>
                            </div>
                        </>
                    )
                  })}
            </div>
        )
       }
           
        </div>
    )
}

export default TopBlog