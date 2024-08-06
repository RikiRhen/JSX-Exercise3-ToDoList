//Should take an array of ToDo components as a prop and show them.

import { ReactElement } from "react";
import { IToDo, ToDo } from "..";

interface IListToDoProps {
    toDoList: (IToDo[]);
    id: number;
    completeToDo: (toDo: IToDo) => void;
    removeToDo: (toDo: IToDo) => void;
}

export function ListToDo(props: IListToDoProps): ReactElement {

    return (
        <section className="toDoList">
            {props.toDoList.map((toDo: IToDo) => (
                <ToDo key={toDo.id} id={toDo.id} toDo={toDo} completeToDo={props.completeToDo} removeToDo={props.removeToDo} />
            ))}
        </section>
    )
}