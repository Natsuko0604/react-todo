import { useState } from "react";
import { InputTodo } from "./components/inputTodo";
import "./styles.css";

export const Todo = () => {
    const [todoText, setTodoText] = useState([""]);
    const [incompleTodos, setIncompleTodos] = useState([]); 
    const [compleTodos, setcompleTodos] = useState([]); 

    const onChangeTodoText = (event) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleTodos, todoText];
        setIncompleTodos(newTodos);
        setTodoText("");
    }
    const onClickDelete = (index) => {
     const newTodos = [...incompleTodos];
     newTodos.splice(index, 1);
     setIncompleTodos(newTodos);
    }
    const onClickComplete = (index) => {
        const newImcompleteTodos = [...incompleTodos];
        newImcompleteTodos.splice(index, 1);

        const newCompleteTodos = [...compleTodos, incompleTodos[index]];
        setIncompleTodos(newImcompleteTodos);
        setcompleTodos(newCompleteTodos);
    }
    const onClickBack = (index) => {
        const newCompleteBack = [...compleTodos];
        newCompleteBack.splice(index, 1);

        const newImcompleteTodos = [...incompleTodos, compleTodos[index]];
        setcompleTodos(newCompleteBack);
        setIncompleTodos(newImcompleteTodos);
    }

    return(
    <>
    <InputTodo todoText = {todoText} 
               onChange = {onChangeTodoText} 
               onClick={onClickAdd}/>
    <div className="incomplete-area">
        <p className="title">未完了リスト</p>
        <ul>
          {incompleTodos.map((todo, index)=>{
            return (
           <li key={todo}>
            <div className="list-row">
            <p>{todo}</p>
            <button onClick={()=> onClickComplete(index)}>完了</button>
            <button onClick={()=> onClickDelete(index)}>削除</button>
            </div>
        </li>
            );
          })}
            
           
        </ul>
    </div>

    <div className="complete-area">
        <p className="title">完了リスト</p>
        <ul>
            {compleTodos.map((todo, index)=> {
                return(
                    <li key={todo}>
                    <div className="list-row">
                        <p>{todo}</p>
                    <button onClick={()=>onClickBack(index)}>戻す</button>
                    </div>
                   </li> 
                )
            })}
            
        </ul>

       
    </div>
        </>
          )
};