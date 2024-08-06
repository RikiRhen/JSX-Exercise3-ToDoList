import { useOutletContext } from "react-router-dom";
import { IToDoContext } from "../interfaces";

export function useToDoContext(): IToDoContext {
    return useOutletContext<IToDoContext>();
}