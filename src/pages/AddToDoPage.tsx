import { ChangeEventHandler, MouseEventHandler, ReactElement, useState } from "react";
import { IToDo } from "..";
import { useToDoContext } from "../hooks";
import "../css/AddToDoPage.css"
import { useNavigate } from "react-router-dom";

export function AddToDoPage(): ReactElement {
    const [inputTaskValue, setInputTaskValue] = useState<string>("");
    const [inputAuthorValue, setInputAuthorValue] = useState<string>("");
    const { addToDo, idCounter } = useToDoContext();
    const timestamp = new Date().toLocaleDateString();
    const navigate = useNavigate();

    function addTask() {
        let item: IToDo = {
            id: idCounter,
            author: inputAuthorValue,
            task: inputTaskValue,
            timestamp
        }
        addToDo(item);
        setInputTaskValue("");
        setInputAuthorValue("");
    }

    const handleOnSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        addTask();
        navigate("/");
    }

    const handleOnAnotherSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        addTask();
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
                    <input type="text" className="authorInput" placeholder="Author..." onChange={handleAuthorOnChange} value={inputAuthorValue} />
                </div>
                <div className="textAreaDiv">
                    <textarea className="taskText" id="toDoText" placeholder="ToDo..." onChange={handleTaskOnChange} value={inputTaskValue}></textarea>
                </div>
                <div className="buttonDiv">
                    <button className="addToDoButton" onClick={handleOnAnotherSubmit}>Add another ToDo</button>
                    <button className="addToDoButton" onClick={handleOnSubmit}>Add</button>
                </div>

            </form>
        </section>
    )
}