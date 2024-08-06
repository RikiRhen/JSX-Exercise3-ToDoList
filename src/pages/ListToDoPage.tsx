import { ReactElement } from "react";
import { ToDo, IToDo } from "../index";
import { useToDoContext } from "../hooks";
import "../css/ListToDoPage.css";

export function ListToDoPage(): ReactElement {
    const { toDos, completeToDo, removeToDo } = useToDoContext();

    return (
        <section className="listToDoSection">
            <h1>List of ToDo's</h1>
            <div className="toDoList">
                {toDos.map((toDo: IToDo) => (
                    <ToDo key={toDo.id} id={toDo.id} toDo={toDo} completeToDo={completeToDo} removeToDo={removeToDo} />
                ))}
            </div>
        </section>
    );
}