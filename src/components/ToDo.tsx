//The actual ToDo component

import { MouseEventHandler, ReactElement } from "react";
import "./ToDo.css";

export interface IToDo {
    id: number;
    author: string;
    task: string;
    timestamp: string;
}

interface IToDoProps {
    toDo: IToDo;
    id: number;
    timestamp: string;
    completeToDo: (toDo: IToDo) => void;
    removeToDo: (toDo: IToDo) => void;
}

export function ToDo({ toDo, completeToDo, removeToDo }: IToDoProps): ReactElement {
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
            <p className="ToDoTaskText" id={`toDoId-${toDoId}`}>{toDo.task}</p>
            <button className="completeButton" onClick={handleCompleteClick}>Complete</button>
            <button className="removeButton" onClick={handleRemoveClick}>Delete task</button>
        </article>
    )
}