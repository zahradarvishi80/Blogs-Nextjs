import H from "../../styles/Home/Home.module.css"
import Blog from "../component/AllBlogs"
import Slider from "../component/SliderBlogs"
import TopBlog from "../component/TopBlog"
import TopUser from "../component/TopUser"
const Home=()=>{
    return(
        <div className={H.main}>
            <TopBlog/> 
            <Blog/>
            <TopUser/>  
            <Slider/>
        </div>
    )
}
export default Home