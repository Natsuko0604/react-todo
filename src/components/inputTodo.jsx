export const InputTodo = (props) => {
    
    <div className="input-area">
        <input placeholder="todoを入力してください"
        value={todoText}
        onChange={onChangeTodoText}/>
        <button onClick = {onClickAdd}>追加</button>
    </div>
};
