
import { Dispatch, SetStateAction, useCallback} from "react";
import nowUser from "./data/user.json";
import ProfileImage from "./Image";
import {Profileprops} from "./type";
import React from "react";
import {Profileimg,Profile,ProfileName,ProfileIntro} from "./UserProfileDesign"
/*type userProfile = {

    changeUser : number;
    setChangeUser : Dispatch<SetStateAction<number>>
  };
*/

function UserProfile({changeUser,setChangeUser} : Profileprops){
    
   // Dispatch<SetStateAction<number>>
    const toggleUser = useCallback (() => {
       
        changeUser ? setChangeUser(0) : setChangeUser(1);
        
      },[]);

      //확장성....! 어떻게 하면 자유롭게 채팅방을 고를수있을까....
     
    const {name, intro} = nowUser[changeUser];
    
    return( 
    
    <Profile>
       
        <Profileimg  src = {ProfileImage[changeUser]} onClick = {toggleUser}/>
       
        <ProfileName>{name}<span> 🟢</span></ProfileName>
       <ProfileIntro>{intro}</ProfileIntro>

    </Profile>
    
    )
         
};

export default React.memo(UserProfile) ;