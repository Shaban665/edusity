import React, { useRef } from 'react'
import "./Testimonials.css"
import right from "../../assets/next-icon.png"
import left_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
 


const Testimonials = () => {
   
    const slider = useRef();
    let tx = 0;
      
  
  const slideForward =()=>{
    if(tx>-50){
      tx-=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward =()=>{
    if(tx < 0){
      tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
      
  
  return (

   

    <div className='testimonials'>
          <img src={right} alt = "" className='next-btn' onClick={slideForward}/> 
          <img src={left_icon} alt = "" className='back-btn' onClick={slideBackward}/>
          <div className="slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className="user-info">
                    
                    <img src={user_1} alt=""/>  
                    <div> 
                    <h3>Richen</h3> 
                    <span>Educity, India</span>
                    </div>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum officia vitae deserunt labore mollitia eius. Sit quis tempora id libero magni? Obcaecati praesentium ipsum alias magnam illum. Ipsum, cupiditate!</p>
                </div>
               
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    
                    <img src= {user_2} alt=""/>  
                    <div> 
                    <h3>Albert</h3> 
                    <span>Educity, India</span>
                    </div>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum officia vitae deserunt labore mollitia eius. Sit quis tempora id libero magni? Obcaecati praesentium ipsum alias magnam illum. Ipsum, cupiditate!</p>
                </div>
               
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    
                    <img src= {user_3} alt=""/>  
                    <div> 
                    <h3>Lily</h3> 
                    <span>Educity, India</span>
                    </div>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum officia vitae deserunt labore mollitia eius. Sit quis tempora id libero magni? Obcaecati praesentium ipsum alias magnam illum. Ipsum, cupiditate!</p>
                </div>
               
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    
                    <img src={user_4} alt=""/>  
                    <div> 
                    <h3> Aashish Dhiman</h3> 
                    <span>DBUU, India</span>
                    </div>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum officia vitae deserunt labore mollitia eius. Sit quis tempora id libero magni? Obcaecati praesentium ipsum alias magnam illum. Ipsum, cupiditate!</p>
                </div>
               
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Testimonials
