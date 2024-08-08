import { MouseEventHandler, ReactElement, useState } from "react";
import { IToDo } from "../interfaces";
import { useToDoContext } from "../hooks";
import "../css/ToDo.css";

interface IToDoProps {
    toDo: IToDo;
}

export function ToDo({ toDo }: IToDoProps): ReactElement {
    const [isEditing, setIsEditing] = useState(false);
    const [taskText, setTaskText] = useState(toDo.task);
    const { completeToDo, removeToDo, moveUp, moveDown } = useToDoContext();
    const toDoId = (toDo.id).toString();

    const handleCompleteClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        completeToDo(toDo);
    }

    const handleRemoveClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        removeToDo(toDo);
    }

    const handleMoveUp: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        moveUp(toDo.id);
    }

    const handleMoveDown: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        moveDown(toDo.id);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleDoneEdit = () => {
        setIsEditing(false);
    }

    return (
        <article className="toDoItem">
            <div className="priorityButtons">
                <button className="btn" id="moveUpButton" onClick={handleMoveUp}>{`<`}</button>
                <button className="btn" id="moveUpButton" onClick={handleEdit}>Edit</button>
                <button className="btn" id="moveDownButton" onClick={handleMoveDown}>{`>`}</button>
            </div>
            <p className="author">{toDo.author}</p>
            <p className="timestamp">{toDo.timestamp}</p>
            <div className="toDoTaskText" id={`toDoId-${toDoId}`}>
                {isEditing ?
                    (<textarea value={taskText} onChange={(e) => setTaskText(e.target.value)} />) :
                    (<p>{taskText}</p>)}
            </div>
            <div className="buttonDiv">
                {isEditing ? (
                    <button className="btn" id="saveButton" onClick={handleDoneEdit}>Done</button>
                ) : (
                    <>
                        <button className="btn" id="removeButton" onClick={handleRemoveClick}>Delete</button>
                        <button className="btn" id="completeButton" onClick={handleCompleteClick}>Complete</button>
                    </>
                )}
            </div>
        </article>
    )
}