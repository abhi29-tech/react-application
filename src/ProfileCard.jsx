import React from "react";
import reactLogo from './assets/react.svg'


const ProfileCard=({ProfileList})=>{
    return(
    <div style={{border: "6px solid gray" , padding : "20px",maxWidth:"610px", backgroundColor:"black",margin:"20% auto",  justifyContent: "center",padding: "30px",}}>
        <img
          style={{
            border:"3px solid seashell",
            borderRadius: "50%",
            width: "150px",
            height:"150px",
            marginBottom:"20px",      
            objectPosition:"left",
            
          }}
          src={reactLogo}
        />
        <div style={{textAlign:"left",fontSize:"23px",fontFamily:"revert",color:"white"}}>
           
            <div>
                <span>name:</span>
                <span>{ProfileList.name}</span>
            </div>
            <div>
                <span>department:</span>
                <span>{ProfileList.department}</span>
            </div>
            <div>
                <span>year:</span>
                <span>{ProfileList.year}</span>
            </div>
            <div>
                <span>Mobile:</span>
                <span>{ProfileList.Mobile}</span>
            </div>
            <div>
                <span>address:</span>
                <span>{ProfileList.address}</span>
                <a href="https://www.linkedin.com/in/abhinandana-uk-0282952a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"target="_blank">
                    linkedln profile
                </a>
            </div>
            

        </div>
    </div>
    );
};
export default ProfileCard;