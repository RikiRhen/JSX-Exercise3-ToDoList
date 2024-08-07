import { useState } from "react";
import { Header, IToDo, IToDoContext, } from "./index";

import "./css/App.css";
import { Outlet } from "react-router-dom";
// let idCounter = 0; // <-- is the actual variable to use for final implementation when all test cases are cleared out.

//########TEST VARIABLES#########   <-- This section is to be deleted for final implementation when all test cases are cleared out.
let idCounter = 2;
const timestamp = new Date().toLocaleDateString();
//###############################

export function App() {
  const [toDoList, setToDoList] = useState<IToDo[]>([{ author: "Riki", id: 0, task: "Test 1", timestamp }, { author: "Riki", id: 1, task: "Test 2", timestamp }]);
  const [completedToDoList, setCompletedToDoList] = useState<IToDo[]>([]);
  let taskCounter = toDoList.length;


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
    const updatedCompletedToDoList: IToDo[] = completedToDoList.filter((toDo) => toDo.id !== removeToDo.id)
    setToDoList(updatedToDoList);
    setCompletedToDoList(updatedCompletedToDoList);
  }

  const toDoContext: IToDoContext = {
    toDos: toDoList,
    completedToDos: completedToDoList,
    idCounter,
    taskCounter,
    addToDo,
    completeToDo,
    removeToDo
  }

  return (
    <>
      <Header />
      <Outlet context={toDoContext} />
    </>
  );
}
