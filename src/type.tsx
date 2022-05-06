import { Dispatch, SetStateAction} from "react";


//todo,done 파일에서 usetoDo를 불러와야하므로 list,Itemlist가 속성은 같지만 이름을 달리해야 했음
export interface User{ 

  id: number,
  name: string,
  intro: string,
  change: boolean

}

export interface MessageItem{

  userId : number;
  text: string;
 
}

export interface ChatList{

  roomId: number;
  name: string;
  chat : MessageItem[];
 
}

export interface Profileprops{

  changeUser : number;
  setChangeUser : Dispatch<SetStateAction<number>>
};