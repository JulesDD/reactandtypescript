import React, { useRef } from 'react';
import './NewTodo.css';

type NewToDoProps = {
    onNewTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewToDoProps> = props => {
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler=(e: React.FormEvent)=> {
        e.preventDefault();
        const enteredText = inputRef.current!.value;
            props.onNewTodo(enteredText);
    };
    return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="todo-text">More things to do?</label>
            <input type="text" id="todo-text" ref={inputRef}/>
        </div>
        <button type="submit">ADD THEM HERE!!!</button>
    </form>
    );
};

export default NewTodo;