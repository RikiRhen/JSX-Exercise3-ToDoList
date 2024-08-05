import { ReactElement } from "react";
import { IToDo } from "..";

interface IButtonProps {
    addToDo: (toDo: IToDo) => void
}

export function Button({addToDo}: IButtonProps): ReactElement{

    return(
        <h1>Nothing here yet</h1>
    )
}