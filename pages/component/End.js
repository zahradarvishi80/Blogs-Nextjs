import end from "../../styles/End/End.module.css"

const End=()=>{

    return(
        <div className={end.main}>
          <div className={end.Head2}>
          <p className={end.p1}>
          BL<span className={end.span}>OOO</span>GINJA
          </p>
          <p span className={end.p}>
            Bloginja is site for blog. </p>
            <p span className={end.p} >
            that people can read and write the blogs, </p>
            <p span className={end.p}>
            and comments for other blogs </p>
            
            <div className={end.main2}>
            <img className={end.img} src="https://www.shareicon.net/data/128x128/2017/06/30/888065_logo_512x512.png" alt="ax" />
 
            <img className={end.img} src="https://www.digikala.com/mag/wp-content/uploads/2016/05/Instagram-icon.jpg" alt="ax" />
            <img className={end.img} src="https://saednews.com/storage/media-center/images/ac-image-kv1627983894xy.png" alt="ax" />
            </div>
           

            

         
         </div>
         <div className={end.Head3}>
         <button className={end.btn}>
          <p className={end.p2}>Home</p></button>
          <button className={end.btn}>
          <p className={end.p2}>Blogs </p></button>
          <button className={end.btn}>
          <p className={end.p2}> TopBlogs </p></button>
          <button className={end.btn}>
          <p className={end.p2}> Users</p></button>
         </div>
        </div>
    )
}
export default End