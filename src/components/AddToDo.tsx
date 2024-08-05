//Form to create a new ToDo component

import { ChangeEventHandler, MouseEventHandler, ReactElement, useState } from "react";
import { IToDo } from "..";
import "./AddToDo.css";

interface IAddToDoProps {
    addToDo: (toDo: IToDo) => void;
    idCounter: number;
    timestamp: string;
}


export function AddToDo(props: IAddToDoProps): ReactElement {
    const [inputTaskValue, setInputTaskValue] = useState<string>("");
    const [inputAuthorValue, setInputAuthorValue] = useState<string>("");

    const handleOnSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        let item: IToDo = {
            id: props.idCounter,
            author: inputAuthorValue,
            task: inputTaskValue,
            timestamp: props.timestamp
        }
        props.addToDo(item);
        setInputTaskValue("");
        setInputAuthorValue("");
    }

    const handleTaskOnChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setInputTaskValue(e.target.value);
    }

    const handleAuthorOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputAuthorValue(e.target.value);
    }

    return (
        <section className="toDoFormSection">
            <form className="toDoForm">
                <div className="authorDiv">
                    <input type="text" className="authorInput" placeholder="Author..." onChange={handleAuthorOnChange} value={inputAuthorValue}/>
                </div>
                <div className="textAreaDiv">
                    <textarea className="taskText" id="toDoText" placeholder="ToDo..." onChange={handleTaskOnChange} value={inputTaskValue}></textarea>
                </div>
                <div className="buttonDiv">
                    <button className="addToDoButton" onClick={handleOnSubmit}>Add</button>
                </div>
            </form>
        </section>
    )
}