import { useState } from "react";
import { Header, IToDo, IToDoContext, } from "./index";

import "./css/App.css";
import { Outlet } from "react-router-dom";
// let idCounter = 0; // <-- is the actual variable to use for final implementation when all test cases are cleared out.

//########TEST VARIABLES#########   <-- This section is to be deleted for final implementation when all test cases are cleared out.
let idCounter = 4;
const timestamp = new Date().toLocaleDateString();
//###############################

export function App() {
  const [toDoList, setToDoList] = useState<IToDo[]>([{ author: "Riki", id: 1, task: "Test 1", timestamp }, { author: "Riki", id: 2, task: "Test 2", timestamp }, { author: "Adam", id: 3, task: "Test 3", timestamp }]); // <-- test cases, empty out for final deployment.
  const [completedToDoList, setCompletedToDoList] = useState<IToDo[]>([{ author: "Riki", id: 0, task: "Completed task test", timestamp }]);  // <-- test case, empty out for final deployment.
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

  function moveUp(id: number) {
    const index = toDoList.findIndex((toDo) => toDo.id === id);
    if (index > 0) {
      const [item] = toDoList.splice(index, 1);
      const newArray: IToDo[] = Array.from(toDoList);
      newArray.splice(index - 1, 0, item);
      setToDoList(newArray);
    }
  }

  function moveDown(id: number) {
    const index = toDoList.findIndex((toDo) => toDo.id === id)
    if (index < toDoList.length - 1) {
      const [item] = toDoList.splice(index, 1);
      const newArray: IToDo[] = Array.from(toDoList);
      newArray.splice(index + 1, 0, item);
      setToDoList(newArray);
    }
  }

  function sortByAuthor(): void {
    const newArray = Array.from(toDoList);
    newArray.sort((a, b) => {
      if (a.author < b.author) {
        return -1;
      } else if (a.author > b.author) {
        return 1;
      } else {
        return 0;
      }
    });
    setToDoList(newArray);
  }

  //Technically was asked to sort by Timestamp but the ID is simpler and has identical effect.
  function sortById(): void {
    const newArray = Array.from(toDoList);
    newArray.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
    setToDoList(newArray);
  }

  const toDoContext: IToDoContext = {
    toDos: toDoList,
    completedToDos: completedToDoList,
    idCounter,
    taskCounter,
    addToDo,
    completeToDo,
    removeToDo,
    moveUp,
    moveDown,
    sortByAuthor,
    sortById
  }

  return (
    <>
      <Header />
      <Outlet context={toDoContext} />
    </>
  );
}
