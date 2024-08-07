import { ReactElement } from "react";
import { ToDo, IToDo, CompletedToDo } from "../index";
import { useToDoContext } from "../hooks";
import "../css/ListToDoPage.css";

export function ListToDoPage(): ReactElement {
    const { toDos, completedToDos } = useToDoContext();

    return (
        <section className="toDoListsSection">
            <div className="listToDoDiv">
                <h1>ToDo's</h1>
                <div className="toDoList">
                    {toDos.map((toDo: IToDo) => (
                        <ToDo key={toDo.id} toDo={toDo} />
                    ))}
                </div>
            </div>
            <div className="listCompletedDiv">
                <h1>Finished Tasks</h1>
                <div className="completedList">
                    {completedToDos.map((toDo: IToDo) => (
                        <CompletedToDo key={toDo.id} toDo={toDo} />
                    ))}
                </div>
            </div>
        </section>

    );
}