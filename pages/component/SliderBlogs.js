import { useEffect,useState } from "react";
import Image from "next/image"
const Slider=()=>{
    
    const [currentImage, setCurrentImage] = useState(null);

    const [blogs,setBlogs]=useState([])
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




    return(
        <>
      
          {/* <img src={currentImage }/> */}
        </>
    )
}
export default Slider