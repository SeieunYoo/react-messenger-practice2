import {useState,useCallback, useMemo, memo} from "react";
import styled  from "styled-components";
import { Dispatch, SetStateAction} from "react";
import useInput from "./useInput";
import { FaPlus } from "react-icons/fa";
import {MessageItem} from "./type"
import React from "react";
import {Input,MessageButton,Form,InputWrapper,Emojimerong} from "./InputformDesign";

type InputProps = {

  changeUser  :number;
  messageList : MessageItem[];
  setMessageList : Dispatch<SetStateAction<MessageItem[]>>
};

function Inputform ({changeUser, messageList, setMessageList} : InputProps){

  const{message, onChange ,setMessage} = useInput();

  const submitEmoji = useCallback((event : React.SyntheticEvent) => {
    event.preventDefault();
      setMessageList(messageList => [...messageList,
      {
        text: "π",
        userId: changeUser,
      }]);  
      //μλ ₯λ°μ κ±Έ λ°°μ΄μ λ£μ

    },[]);
  
    const submitInput = useCallback((event : React.SyntheticEvent) => {
      event.preventDefault();
      
       if (message) {
        setMessageList(messageList => [...messageList,
        {
          text: message,
          userId: changeUser,
        }]);
        //μλ ₯λ°μ κ±Έ λ°°μ΄μ λ£μ

      }
    
      else{
         alert("λ©μμ§λ₯Ό μλ ₯νμΈμ!");
      }
      
      setMessage("");
    },[message]);
    

      return(
      <Form onSubmit={submitInput} >
        <Emojimerong onClick={submitEmoji}>π</Emojimerong>
        <Input
          onChange={onChange}
          value={message}
          type="text"
          placeholder="λ©μμ§λ₯Ό μλ ₯νμΈμ"
          autoFocus = {true}
          spellCheck="false"
          
        />
        <MessageButton onClick={submitInput}>λ³΄λ΄κΈ°</MessageButton>
      </Form>
      );
}


export default React.memo(Inputform);
