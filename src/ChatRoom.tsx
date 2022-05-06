import { Dispatch, MemoExoticComponent, SetStateAction} from "react";
import { useState,useMemo } from "react";
import Inputform from "./InputForm";
import UserProfile from "./UserProfile";
import chatting from "./data/chat.json";
import Message from "./Message";
import styled  from "styled-components";
import { MessageItem } from "./type";
import { ChatList} from "./type";
import React from "react";
import useMessageList from "./useMessageList";

function ChatRoom(){

    const{messageList,setMessageList} = useMessageList();

    //const [messageList, setMessageList] = useState<MessageItem[]>(chatting[1].chat);
    const [changeUser,setChangeUser] = useState<number>(0);
  
    
    const ChatWrapper = styled.div
    `
      flex:1;
      display : flex;
      flex-direction:column;
     
    `;
    
    return(
       <ChatWrapper>
        <UserProfile changeUser={changeUser} setChangeUser = {setChangeUser}/>
        <Message messageList={messageList}/>
        <Inputform changeUser={changeUser} messageList={messageList} setMessageList={setMessageList}></Inputform> 
         </ChatWrapper>
    );

    
}

export default ChatRoom;