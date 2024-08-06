export interface IToDo {
    id: number;
    author: string;
    task: string;
    timestamp: string;
}

export interface IToDoContext {
    toDos: IToDo[];
    idCounter: number;
    addToDo: (toDo: IToDo) => void;
    completeToDo: (toDo: IToDo) => void;
    removeToDo: (toDo: IToDo) => void;
}