import blog from "../../styles/AllBlog/AllBlog.module.css"
import {useRouter} from "next/router";
import Cookies from "universal-cookie";
import { useEffect,useState } from "react";
const Blog=()=>{
    const router=useRouter()
    const [blogs,setBlogs]=useState([])
    const cookies = new Cookies();
    const token=cookies.get("ut");

    useEffect(()=>{
        const blog=async()=>{
            fetch('http://localhost:4000/blog')
            .then((res)=>res.json())
            .then((data)=>{
                console.log("data",data);
                setBlogs(data)
               
            })
    
        }
        blog()
    },[])
    console.log(blogs);



    // <=
    return(
        <div className={blog.container}>
        <div className={blog.main}>
        
        {blogs.slice(0,4).map((item,index)=>{
            return(
                     <div className={blog.div}>
                        <img key={index} className={blog.img}  src={item.imgurl} />
                        <div className={blog.div2}>
                           
                            <p className={blog.p}>
                            {item.title}
                            </p>
                        </div>
                    </div>
             
                
                ) 

        
            
        })}
              

        </div>

        <div className={blog.d}>
                <button className={blog.btn}> 
               <p className={blog.p3}> see more </p>
               </button>
               </div>
        </div>
       
    )
}
export default Blog