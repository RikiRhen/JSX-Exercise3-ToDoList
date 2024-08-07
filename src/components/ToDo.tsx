import { MouseEventHandler, ReactElement } from "react";
import { IToDo } from "../interfaces";
import { useToDoContext } from "../hooks";
import "../css/ToDo.css";

interface IToDoProps {
    toDo: IToDo;
}

export function ToDo({ toDo }: IToDoProps): ReactElement {
    const { completeToDo, removeToDo } = useToDoContext();
    const toDoId = (toDo.id).toString();

    const handleCompleteClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        completeToDo(toDo);
    }

    const handleRemoveClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        removeToDo(toDo);
    }

    return (
        <article className="toDoItem">
            <p className="author">{toDo.author}</p>
            <p className="timestamp">{toDo.timestamp}</p>
            <p className="toDoTaskText" id={`toDoId-${toDoId}`}>{toDo.task}</p>
            <div className="buttonDiv">
                <button className="btn" id="removeButton" onClick={handleRemoveClick}>Delete</button>
                <button className="btn" id="completeButton" onClick={handleCompleteClick}>Complete</button>
            </div>
        </article>
    )
}