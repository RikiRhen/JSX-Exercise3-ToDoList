export interface IToDo {
    id: number;
    author: string;
    task: string;
    timestamp: string;
}

export interface IToDoContext {
    toDos: IToDo[];
    completedToDos: IToDo[];
    idCounter: number;
    taskCounter: number;
    addToDo: (toDo: IToDo) => void;
    completeToDo: (toDo: IToDo) => void;
    removeToDo: (toDo: IToDo) => void;
    moveUp: (id: number) => void;
    moveDown: (id:number) => void;
}