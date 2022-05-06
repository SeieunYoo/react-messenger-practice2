
import user from "./data/user.json";
import {useRef,useEffect,useMemo} from "react";
import { MessageItem } from "./type";
import ProfileImage from "./Image"; 
import React from "react";
import {Wrapper,ChatMessage,ChatProfile,Chatcontainer,MessageBox,ChatName} from "./MessageDesign";

type MessageList = {

    messageList : MessageItem[];
  };


function Message({messageList} : MessageList){


    const messageRef = useRef<HTMLDivElement>(null);

    const ScrollEvent = useEffect(()=>{
         if(messageRef.current)
         messageRef.current.scrollTo({
            top: messageRef.current.scrollHeight,
            behavior: "smooth",
          });
    },[messageList]); //메세지리스트가 변할때만 스크롤에 대한 렌더링

   return(
  
       <Wrapper ref={messageRef}>
           {messageList.map((message) => (
               <Chatcontainer key ={message.userId}>
               <ChatProfile src = {ProfileImage[message.userId]}/>
                <MessageBox>
                    <ChatName>{user[message.userId].name} 님의 말: </ChatName>
                     <ChatMessage>{message.text}</ChatMessage>   
                </MessageBox>
           </Chatcontainer>
               ))
           }
           
       </Wrapper>
       

   );

}

export default React.memo(Message);