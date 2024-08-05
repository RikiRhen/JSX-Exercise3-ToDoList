import { useState } from "react";
import { AddToDo, IToDo, ListToDo } from "./index";

import "./App.css";
let idCounter = 0;

export function App() {
  const [toDoList, setToDoList] = useState<IToDo[]>([]);
  const [completedToDoList, setCompletedToDoList] = useState<IToDo[]>([]);
  const date = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

  function addToDo(toDo: IToDo): void {
    const updatedList: IToDo[] = toDoList.concat([toDo]);
    setToDoList(updatedList);
    idCounter++;
  }

  function completeToDo(completeToDo: IToDo): void {
    const updatedCompleteList: IToDo[] = completedToDoList.concat([completeToDo]);
    const updatedToDoList: IToDo[] = toDoList.filter((toDo) => toDo.id !== completeToDo.id)
    setCompletedToDoList(updatedCompleteList);
    setToDoList(updatedToDoList);
  }

  function removeToDo(removeToDo: IToDo): void {
    const updatedToDoList: IToDo[] = toDoList.filter((toDo) => toDo.id !== removeToDo.id)
    setToDoList(updatedToDoList);
  }

  return (
    <>
      <h1>AddToDo component</h1>
      <AddToDo addToDo={addToDo} idCounter={idCounter} timestamp={timestamp} />
      <h1>List of ToDo's</h1>
      <ListToDo toDoList={toDoList} id={idCounter} completeToDo={completeToDo} removeToDo={removeToDo} timestamp={timestamp} />
      <h1>List of completed ToDo's</h1>
      <ListToDo toDoList={completedToDoList} id={idCounter} completeToDo={completeToDo} removeToDo={removeToDo} timestamp={timestamp} />
    </>
  );
}
